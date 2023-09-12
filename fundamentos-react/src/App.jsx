import React from 'react';
import ComParametro from './components/ComParametro';
import Aleatorio from './components/Aleatorio';
import Contador from './components/Contador';
import IsPar from './components/isPar';
import Card from './components/layout/Card';
import ListaAlunos from './components/repeticao/ListaAlunos';
import ListaProdutos from './components/repeticao/ListaProdutos';
import Familia from './components/Familia';
import './index.css'

export default () => (
    <div id='app'>
        <h1>Fundamentos React</h1>
    <div className='Cards'>
    
        <Card titulo="Exemplo de Card" color="#080">
            <Aleatorio min={1} max={60}/>
        </Card>
        
        <Card titulo="Exemplo de Card" color="#FAE428">
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Pedro Silva"
            />
        </Card>

        <Card titulo="Exemplo de Card" color="#9E05CF">
            <Familia></Familia>
        </Card>
        <Card titulo="Exemplo de Card" color="#FF4C65">
            <ListaAlunos></ListaAlunos>
        </Card>
        <Card titulo="Exemplo de Card" color="#FF4C65">
            <ListaProdutos/>
        </Card>
        <Card titulo="Exemplo de Card" color="#FF4C65">
            <IsPar/>
        </Card>
        <Card titulo="Exemplo de Card" color="#FF4C65">
            <Contador/>
        </Card>
    </div>
    </div>
)