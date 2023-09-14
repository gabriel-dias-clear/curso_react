import React, {useRef} from 'react'

const Ref = () =>{
    /* permite criar uma referência mutável que pode ser usada para acessar diretamente um elemento DOM ou para manter uma referência a um valor que não cause uma nova renderização quando for alterado. */
    const teste = useRef(0)
    console.log(teste)
    return(
        <>
            <h1>Ref</h1>

        </>
    )
}

export default Ref