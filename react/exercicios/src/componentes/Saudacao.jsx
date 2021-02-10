import React, {Component} from 'react'

export default class Saudacao extends Component{

    setTipo(e){
        // let i = 1
        // setInterval(() => {
        //     this.setState({tipo: ++i})
        // },1000)
        this.setState({tipo: e.target.value})
    }

    setNome(e){
        this.setState({nome: e.target.value})
    }

    constructor(props){
        super(props)
        this.state = {
            tipo: this.props.tipo,
            nome: this.props.nome
        }

        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
    }

    render() {
        const {tipo, nome} = this.state
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="nome" value={nome} onChange={this.setNome}/>
            </div>
        )
    }
}