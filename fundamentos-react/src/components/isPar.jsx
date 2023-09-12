import React, {useState} from 'react'
import './isPar.css'

export default props =>{
    const [teste, setTeste] = useState('')
    console.log(teste)
    function handleClick(e){

       const num = prompt('digite um número!')

       if(num){
        if(num % 2 == 0){
            setTeste('seu número é par')
        } else {
            setTeste('seu número é ímpar')
        }
       }
        
    }

    

    return (
        <div className='btn-click'>
            <button onClick={handleClick}>CLIQUE</button>
            <div>{teste}</div>
        </div>
    )
}