import React from 'react'
import ReactDom from 'react-dom'

import Saudacao from './componentes/Saudacao'

ReactDom.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Joao"/>
    </div>        
, document.getElementById('root'))