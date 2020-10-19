import React from 'react';
import { Row, Space, Button, Tooltip } from 'antd';

import {
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined
} from '@ant-design/icons';

const toolTip = {
  gamil: 'Interested in talking? Then get in touch with me',
  linkedIn: 'Check-out my professional networking',
  github: 'Check-out some of my own initiatives',
  twitter: 'Check-out my social networking service',
  facebook: 'Check-out my personal networking'
}

const ComponentName = () => {  
  return (
    <div style={{marginTop: '20px'}} >
      <Row justify="center" align="top">
        <Space size={10}>
          <Tooltip placement="bottom" title={toolTip.gamil}>
            <Button type="link" size='large' href="mailto:sh.naveen25@gmail.com" target="_blank">
              <MailOutlined style={{ fontSize: 32 }} />
            </Button>
          </Tooltip>
          <Tooltip placement="bottom" title={toolTip.linkedIn}>
            <Button type="link" size='large' href="https://bit.ly/linkedin_shnaveen" target="_blank">
              <LinkedinOutlined style={{ fontSize: 32 }} />
            </Button>
          </Tooltip>
          <Tooltip placement="bottom" title={toolTip.github}>
            <Button type="link" size='large' href="https://bit.ly/github_shnaveen" target="_blank">
              <GithubOutlined style={{ fontSize: 32 }} />
            </Button>
          </Tooltip>
          <Tooltip placement="bottom" title={toolTip.twitter}>
            <Button type="link" size='large' href="https://bit.ly/twitter_shnaveen" target="_blank">
              <TwitterOutlined style={{ fontSize: 32 }} />
            </Button>
          </Tooltip>
          <Tooltip placement="bottom" title={toolTip.facebook}>
            <Button type="link" size='large' href="https://bit.ly/facebook_shnaveen" target="_blank">
              <FacebookOutlined style={{ fontSize: 32 }} />
            </Button>
          </Tooltip>
        </Space>
      </Row>
    </div>
  );
};

export default ComponentName;