import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Code from './Code';
import { 
  Button, Space
} from 'antd';

const ComponentName = () => {
  const [visible, setVisible] = useState(null);
  
  const showDrawer = (type) => {
    setVisible(type);
  };
  
  const onClose = () => {
    setVisible(null);
  };
  
  const properties = { 
    onClose: onClose,
    visible: visible
  }
  
  return (
    <div style={{marginTop: '20px'}} >
      <Space size={10}>
        <Button type="default" shape="round" size='large' onClick={() => showDrawer('about')}>
          Who I am
        </Button>
        <Button type="default" shape="round" size='large' onClick={() => showDrawer('experience')}>
          Experience
        </Button>
        <Button type="default" shape="round" size='large' onClick={() => showDrawer('code')}>
          Code
        </Button>
      </Space>
      <AboutMe {...properties} />
      <Experience {...properties} />
      <Code {...properties} />
    </div>
  );
};

export default ComponentName;