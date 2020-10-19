import React from 'react';
import Logo from '../Logo';
import Content from '../Content';
import TimeLine from '../TimeLine';
import InstallPromotion from '../InstallPromotion';
import './App.css';

const App = () => {
    
    // const resetTimer = () => {
    //   console.log('Reset timer');
    //   let time;
    //   clearTimeout(time);
    //   time = setTimeout(() => {
    //     console.log('Logout');
    //   }, 1000 * 60 * 1);
    // }
    // 
    // window.onload = resetTimer;
    // document.onmousemove = resetTimer;
    // document.onkeypress = resetTimer;
    
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <Content />
          <TimeLine />
          <InstallPromotion />
        </header>
      </div>
    );
}

export default App;
