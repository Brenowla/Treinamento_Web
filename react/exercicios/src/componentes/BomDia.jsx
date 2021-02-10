import React from 'react'

export default props => 
    [
        <h1>Bom dia {props.nome}!</h1>,
        <h2>{props.idade} anos!</h2>
    ] 

// export default props => 
//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>{props.idade} anos!</h2>
//     </React.Fragment> 