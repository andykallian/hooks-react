import React, { useState } from 'react'

const Tabela = ({vetor, selecionar}) => {


  const [termo, setTermo] = useState('');

  return (
    <div>
      <input type="text" onChange={e => setTermo(e.target.value)} placeholder='Informe o nome' className='form-control pesquisa' />
      <table className='table'>
        <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Cidade</th>
                <th>Selecionar</th>
            </tr>
        </thead>

        <tbody>
          {
            vetor.filter(obj => obj.nome.includes(termo)).map((obj, indice) =>(
              <tr key={indice}>
                <td>{indice+1}</td>
                <td>{obj.nome}</td>
                <td>{obj.idade}</td>
                <td>{obj.cidade}</td>
                <td><button onClick={() => selecionar(indice)} className='btn btn-success'>Selecionar</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Tabela