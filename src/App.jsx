import { useState } from 'react';

import './App.css';
import Formulario from './components/Formulario';
import Tabela from './components/Tabela';


function App() {

  // useState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [vetor, setVetor] = useState([]);

  //função para cadastrar

  const cadastrar = () =>{
    let obj = {'nome': nome, 'idade': idade, 'cidade': cidade}
    setVetor([...vetor, obj])
  }


  return (
    <div>
      <Formulario btnCadastrar={btnCadastrar} setNome={setNome} setIdade={setIdade} setCidade={setCidade} cadastrar={cadastrar}/>
      <Tabela vetor={vetor}/>
    </div>
  );
}

export default App;
