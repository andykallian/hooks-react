import React from 'react'

const Formulario = ({btnCadastrar, setNome, setIdade, setCidade, cadastrar}) => {
  return (
    <form>
        <input type='text' placeholder='Nome' className='form-control' onChange={e => setNome(e.target.value)}></input>
        <input type='text' placeholder='Idade' className='form-control' onChange={e => setIdade(e.target.value)}></input>
        <input type='text' placeholder='Cidade' className='form-control' onChange={e => setCidade(e.target.value)}></input>

        {
            btnCadastrar 
            ?
            <input type="button" value='Cadastrar' className='btn btn-primary' onClick={cadastrar}/>
            :
            <div>
                <input type="button" value='Alterar' className='btn btn-secondary' />
                <input type="button" value='Excluir' className='btn btn-danger' />
                <input type="button" value='Cancelar' className='btn btn-success' />
            </div>
        }
    </form>
  )
}

export default Formulario