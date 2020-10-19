import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'antd';
import './index.css';

const InstallPromotion = () => {
  const [showPromotion, setShowPromotion] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const [installEvent, setInstallEvent] = useState(null);
  
  const setStateToDefault = () => {
    setShowPromotion(false);
    setIsInstalling(false);
  };
  
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(
    () => {
      if(showPromotion) {
        setTimeout(() => {
          setShowPromotion(false);
        }, 7000);
      }
    },
    [showPromotion]
  );
  
  useEffect(
    () => {
      // Ref: https://web.dev/customize-install/#beforeinstallprompt
      if(window.innerWidth < 769) {
        window.addEventListener('beforeinstallprompt', (e) => {
          e.preventDefault();
          setInstallEvent(e);
          setTimeout(() => {
            setShowPromotion(true);
          }, 3000);
        }); 
        
        window.addEventListener('appinstalled', (evt) => {
          evt.preventDefault();
          setStateToDefault();
        });
      }
         
      return () => {
        if(window.innerWidth < 769) {
          window.removeEventListener('beforeinstallprompt', setStateToDefault());
          window.removeEventListener('appinstalled', setStateToDefault());
        }
      };
    },
    []
  );
  
  const handleOnInstall = () => {
    setShowPromotion(false);
    installEvent.prompt();
    installEvent.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
        setIsInstalling(true);
      } else {
        console.log('User dismissed the install prompt');
        setIsInstalling(false);
      }
    });
  }
  
  if(!showPromotion) {
    return <div />;
  }
  
  if(isInstalling) {
    return <div />;
  }
  
  return (
    <div className="install_promotion" style={{ fontSize: '14px' }}>
      <Row align="middle" justify="center">
        <Col span={16}>
            Keep App, For Offline & Quick Access!
        </Col>
        <Col span={6}>
          <Button type="dashed" onClick={handleOnInstall}>
            Install
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default InstallPromotion;
