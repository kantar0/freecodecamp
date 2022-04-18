import './App.css';
import FreeCodeCampLogo from './assets/img/fcc_primary_large.svg';
import Button from './components/Button';
import Ccounter from './components/Ccounter';
import { useState } from 'react';

function App() {

  const [ClicksNumber, setClicksNumber] = useState(0);
  
  const clickHandler = () => {
    setClicksNumber(ClicksNumber + 1);
  };

  const resetCounter = () => {
    setClicksNumber(0);
  };
  return (
    <div className='App'>
      <div className='freecodecamp__logo__container'>
        <img className='freecodecamp__logo' src={FreeCodeCampLogo} alt='freecodecamp logo' />
      </div>
      <div className='main__container'>
        <Ccounter
          ClicksNumber={ClicksNumber} />
        <Button
          text='Click'
          isClickButton={true}
          clickHandler={clickHandler} />
        <Button
          text='Reset'
          isClickButton={false}
          clickHandler={resetCounter} />
      </div>
    </div>
  );
}

export default App;
