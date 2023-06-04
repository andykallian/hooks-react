import { useState } from 'react';

import './App.css';
import Formulario from './components/Formulario';
import Tabela from './components/Tabela';


function App() {

  // useState
  const [indiceVetor, setIndiceVetor] = useState('');
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [vetor, setVetor] = useState([]);

  //função para cadastrar
  const cadastrar = () => {
    let obj = { 'nome': nome, 'idade': idade, 'cidade': cidade };
    setVetor([...vetor, obj]);

    setNome('');
    setIdade('');
    setCidade('');
  };

  //função para selecionar o usuário
  const selecionar = (indice) => {
    setIndiceVetor(indice);
    setNome(vetor[indice].nome);
    setIdade(vetor[indice].idade);
    setCidade(vetor[indice].cidade);

    setBtnCadastrar(false);
  };

  //função para alterar os dados
  const alterar = () =>{
    let obj = { 'nome': nome, 'idade': idade, 'cidade': cidade };
    let copiarVetor = [...vetor];
    copiarVetor[indiceVetor] = obj;
    setVetor(copiarVetor);

    setNome('');
    setIdade('');
    setCidade('');
    setBtnCadastrar(true);
  };

  //função para remover os dados
  const remover = () =>{
    let copiarVetor = [...vetor];
    copiarVetor.splice(indiceVetor, 1);
    setVetor(copiarVetor);

    setNome('');
    setIdade('');
    setCidade('');
    setBtnCadastrar(true);
  }

  //função para cancelar a edição ou remoção

  const cancelar = () =>{
    setNome('');
    setIdade('');
    setCidade('');
    setBtnCadastrar(true);

  }

  return (
    <div>
      <Formulario btnCadastrar={btnCadastrar} setNome={setNome} setIdade={setIdade} setCidade={setCidade} cadastrar={cadastrar} alterar={alterar} remover={remover} cancelar={cancelar} nome={nome} idade={idade} cidade={cidade}/>
      <Tabela vetor={vetor} selecionar={selecionar}/>
    </div>
  );
}

export default App;