const { isNumeric } = require('../services/isNumeric');
const logService = require('../services/errorLogging');
const featureFlags = require('../services/featureFlags');

function updateFirmInviteLink(user, newInviteLink, pageErrors) {
  if (isNumeric(newInviteLink) && newInviteLink != user.PreparerDetail.FirmAccount.inviteLink) {
    pageErrors.push({
      param: 'firm_invite_link',
      msg: 'Invite links cannot be numbers.',
    });
    return Promise.resolve();
  }

  if (!featureFlags.HasFeatureAccess(user, 'update-firm-invite-code')) {
    pageErrors.push({
      msg: "You don't have permission to make this change.",
    });
  } else {
    user.PreparerDetail.FirmAccount.inviteLink = newInviteLink;
    return user.PreparerDetail.FirmAccount.save().then(() => Promise.resolve()).catch((error) => {
      if (error.errors && error.errors[0].type == 'unique violation') {
        pageErrors.push({
          param: 'firm_invite_link',
          msg: 'That Invite link is already in use.',
        });
        console.log(pageErrors);
        return Promise.resolve();
      }

      logService.LogError(error);
      throw new Error(error);
    });
  }
}

function updatePersonalInviteLink(user, newInviteLink, pageErrors) {
  if (isNumeric(newInviteLink) && newInviteLink != user.PreparerDetail.inviteLink) {
    pageErrors.push({
      param: 'personal_invite_link',
      msg: 'Invite links cannot be numbers.',
    });
    return Promise.resolve();
  }

  user.PreparerDetail.inviteLink = newInviteLink;

  return user.PreparerDetail.save().then(() => Promise.resolve()).catch((error) => {
    if (error.errors && error.errors[0].type == 'unique violation') {
      pageErrors.push({
        param: 'personal_invite_link',
        msg: 'That invite link is already in use.',
      });
      return Promise.resolve();
    }

    logService.LogError(error);
    throw new Error(error);
  });
}

function updateHappyTaxInviteCode(req, res) {
  const pageErrors = [];
  const { user } = req;
  const newInviteLink = req.body.personal_invite_link;

  if (isNumeric(newInviteLink) && newInviteLink != user.PreparerDetail.globalInviteCode) {
    pageErrors.push({
      param: 'personal_invite_link',
      msg: 'Invite links cannot be numbers.',
    });

    return res.status(200).json({
      pageErrors,
    });
  }

  user.PreparerDetail.globalInviteCode = newInviteLink;

  return user.PreparerDetail.save().then(() => res.status(200).json({
    pageSuccess: 'Your invite link has been updated!',
    pageErrors,
    hideForm: true,
  })).catch((error) => {
    pageErrors.push({
      param: 'personal_invite_link',
      msg: 'That invite link is already in use.',
    });

    return res.status(200).json({
      pageErrors,
    });
  });
}

exports.UpdateCustomInviteLink = function (req, res) {
  const pageErrors = [];
  const savePromises = [];

  let { firm_invite_link } = req.body;
  let { personal_invite_link } = req.body;

  if (req.user.PreparerDetail.FirmAccount.isHappyTax) {
    return updateHappyTaxInviteCode(req, res);
  }

  if (firm_invite_link) {
    firm_invite_link = firm_invite_link.trim();
    savePromises.push(updateFirmInviteLink(req.user, firm_invite_link, pageErrors));
  } else if (featureFlags.HasFeatureAccess(req.user, 'update-firm-invite-code')) {
    pageErrors.push({
      param: 'firm_invite_link',
      msg: 'Invite links cannot be blank.',
    });
  }

  if (personal_invite_link) {
    personal_invite_link = personal_invite_link.trim();
    savePromises.push(updatePersonalInviteLink(req.user, personal_invite_link, pageErrors));
  } else {
    pageErrors.push({
      param: 'personal_invite_link',
      msg: 'Invite links cannot be blank.',
    });
  }

  return Promise.all(savePromises).then(() => res.status(200).json({
    pageSuccess: 'Your invite link has been updated!',
    pageErrors,
    hideForm: true,
  }));
};
