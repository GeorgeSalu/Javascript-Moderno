import React from 'react'
import ReactDom from 'react-dom'

import { BoaTarde, BoaNoite } from "./componentes/Multiplos";

ReactDom.render(
    <div>
        <BoaTarde nome="ana"/>
        <BoaNoite nome="Bia"/>
    </div>        
, document.getElementById('root'))