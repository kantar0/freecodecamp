import './App.css';
import FreeCodeCampLogo from './assets/img/fcc_primary_large.svg';
import Button from './components/Button';
import Pantalla from './components/Pantalla';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input){
      setInput(evaluate(input));
    } else {
      alert ('No hay nada que calcular');
    }
    
  };


  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={FreeCodeCampLogo}
          alt='freecodecamp logo'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Button manejarClic={agregarInput} >1</Button>
          <Button manejarClic={agregarInput} >2</Button>
          <Button manejarClic={agregarInput} >3</Button>
          <Button manejarClic={agregarInput} >+</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={agregarInput} >4</Button>
          <Button manejarClic={agregarInput} >5</Button>
          <Button manejarClic={agregarInput} >6</Button>
          <Button manejarClic={agregarInput} >-</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={agregarInput} >7</Button>
          <Button manejarClic={agregarInput} >8</Button>
          <Button manejarClic={agregarInput} >9</Button>
          <Button manejarClic={agregarInput} >*</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={calcularResultado} >=</Button>
          <Button manejarClic={agregarInput} >0</Button>
          <Button manejarClic={agregarInput} >.</Button>
          <Button manejarClic={agregarInput} >/</Button>
        </div>
        <div className='fila'>
          <ClearButton manejarClear={() => setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
