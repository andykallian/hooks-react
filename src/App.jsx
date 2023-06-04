import { useState } from 'react';

import './App.css';
import Formulario from './components/Formulario';
import Tabela from './components/Tabela';



function App() {

  // useState
  const [btnCadastrar, setBtnCadastrar] = useState(true)

  return (
    <div>
      <Formulario btnCadastrar={btnCadastrar}/>
      <Tabela/>
    </div>
  );
}

export default App;
