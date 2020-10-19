import React from 'react';
import { Row, Col, Button } from 'antd';
import PWAInstallerPrompt from 'react-pwa-installer-prompt'
import './index.css';

const Install = () => {  
  
  if (window.innerWidth > 768) {
    return false;
  }
  
  return (  
    <PWAInstallerPrompt 
      render={({ onClick }) => (
        <div className="install_promotion" style={{ fontSize: '14px' }}>
          <Row align="middle" justify="center">
            <Col span={16}>
                Keep App, For Offline & Quick Access!
            </Col>
            <Col span={6}>
              <Button type="dashed" onClick={onClick}>
                Install
              </Button>
            </Col>
          </Row>
        </div>
      )}
      callback={(data) => console.log(data)} 
    />
  )
}

export default Install
