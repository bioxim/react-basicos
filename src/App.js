//importar react se considera una buena práctica

import logo from './logo.svg';
import './App.css';
import React from 'react';

import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RederizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7 } from './components/Eventos';

// Los componentes permiten separar el código de la interfaz gráfica en pequeños trozos con funcionalidades diferentes
// Los props son elementos que pasan valores a los componentes: esos valores pueden ser de todo: strings, arrays, functions, react elements, react components, etc
//instalar las prop types npm i -s prop-types, permite definir atributos propTypes
/*
EL ESTADO, tiene 3 Propiedades:
  1. Es inmutable: no puede ser alterado
  2. No se puede modificar directamente
  3. Es asíncrono
*/

function App() {

  let nombre = 'Xime'
  let auth = true
  let estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno']

  return (
    <div className="App">
      <header className="App-header">
        <section>
          
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <h1>{ nombre }</h1>
            <p>{ auth ? 'El usuario está logueado' : 'El usuario no está logueado' }</p>
            <p>{ 2 + 1 }</p>
            <ul>
              {estaciones.map((el, index) => <li key={ index } >{ el }</li>)}
            </ul>
          
        </section>
      
        <section>
          <Componente msg="Hola soy un componente funcional expresado desde una prop" />
          <hr></hr>
          <Propiedades 
              cadena="Esto es una cadena de texto" 
              numero={19}
              booleano={true} 
              arreglo={[1,2,3]}
              objeto={{nombre:"Xime", correo:"ximecamino@gmail.com"}}
              funcion={(num) => num * num}
              elementoReact={<i>Esto es un elemento React</i>}
              componenteReact={<Componente msg="Soy un componente pasado como Prop" />}
              />
          <hr />
          <Estado />
          <hr />
          <RederizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
        </section>

      </header>
    </div>
  );
}

export default App;
