import React, { Fragment } from 'react';
import { 
  Drawer
} from 'antd';

const AboutMe = ({ onClose, visible }) => {
  return (
    <Drawer
      title="About Me"
      placement="bottom"
      closable={true}
      height={window.innerWidth < 768 ? (window.innerHeight / 2) : 256}
      onClose={onClose}
      visible={visible === 'about'}
    >
      <Fragment>
        <p style={{ textAlign: 'justify' }}>
          I began my journey as a Full-Stack Developer around 4 years ago. 
          Working closely with clients and talented people across different verticals.
          Being a self-motivated and independent learner, I always focused on delivering scalable, high-quality, and reusable code.
          I am continuously working on improving my skills and curious to learn.
        </p>
        <p style={{ textAlign: 'justify' }}>
          I completed my education in Kalaburagi, Karnataka, India.
          Working as a Senior Software Engineer in a reputed company located in Bangalore, Karnataka, India.
        </p>
        <p style={{ textAlign: 'justify' }}>
          I worked on multiple projects in a different domain. Have good experience in developing E-commerce and Hospitality applications.
          Good understanding of MicroServices, RestFull API's, Source Code Management Tools like Git and Agile Environment.
        </p>
      </Fragment>
    </Drawer>
  );
};

export default AboutMe;