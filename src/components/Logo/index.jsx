import React from 'react';
import './index.css';

import { Popover } from 'antd';

const content = (
  <div>
    Hey folks
  </div>
);

const ComponentName = (props) => {
  return (
    <Popover content={content}>
      <div className="title">
        <div>
          <span>NAVEEN</span><span> HEROORKAR</span></div>
          <div className="sub_title">SOFTWARE ENGINEER</div>
      </div>
    </Popover>
  );
};

export default ComponentName;