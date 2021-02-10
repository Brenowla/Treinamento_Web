import React from 'react'
import ReactDOM from 'react-dom'

import BomDia from './componentes/BomDia'
import Multi,{BoaTarde, BoaNoite} from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'

ReactDOM.render(<BomDia nome='Breno' idade={10}/>,document.getElementById('root'))
ReactDOM.render(<div>
                    <Multi.BoaTarde nome='Breno'/>
                    <BoaNoite nome='Breno'/>
                </div>,document.getElementById('root'))

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="João" />
    </div>,
    document.getElementById('root'))