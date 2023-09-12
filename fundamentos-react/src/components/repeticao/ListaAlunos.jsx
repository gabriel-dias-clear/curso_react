import React from 'react'
import alunos from '../../data/alunos'

export default props => {
    const lista = alunos.map(item=>{
        return (
            <li key={item.id}>{`${item.nome} || Nota=> ${item.nota}`}</li>
        )
    })
    return(
        <div>
            <ul>
                {lista}
            </ul>
        </div>
    )
}