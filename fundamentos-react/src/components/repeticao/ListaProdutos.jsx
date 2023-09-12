import React from 'react'
import Produtos from './../../data/produtos'

export default props => {
    const produto = Produtos.map(item=>{
       return( 
       <li key={item.id}>{`id:${item.id} || ${item.nome} || Valor:${item.valor}`}</li>)
    })
    return (
        <div>
            <ul>
                {produto}
            </ul>
        </div>
    )

}