import React from 'react'

const Formulario = ({btnCadastrar, setNome, setIdade, setCidade, cadastrar, alterar, remover, cancelar, nome, idade, cidade}) => {
  return (
    <form>
        <input type='text' placeholder='Nome' value={nome} className='form-control' onChange={e => setNome(e.target.value)}></input>
        <input type='text' placeholder='Idade' value={idade} className='form-control' onChange={e => setIdade(e.target.value)}></input>
        <input type='text' placeholder='Cidade' value={cidade} className='form-control' onChange={e => setCidade(e.target.value)}></input>

        {
            btnCadastrar 
            ?
            <input type="button" value='Cadastrar' className='btn btn-primary' onClick={cadastrar}/>
            :
            <div>
                <input type="button" value='Alterar' className='btn btn-secondary' onClick={alterar} />
                <input type="button" value='Excluir' className='btn btn-danger' onClick={remover} />
                <input type="button" value='Cancelar' className='btn btn-success' onClick={cancelar} />
            </div>
        }
    </form>
  )
}

export default Formulario