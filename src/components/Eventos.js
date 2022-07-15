import React, { Component } from 'react';

export class EventosES6 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 0
        }
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }

    sumar(e) {
        console.log("sumando")
        console.log(this)
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar(e) {
        console.log("restando")
        console.log(this)
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES6</h2>
                
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>

                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

//Properties initializer (nueva característica con ES7)
export class EventosES7 extends Component {
   //No va más el constructor
    state = {
        contador: 0
    }     
    
    //Arrow functions
    sumar = (e) => {
        console.log("sumando")
        console.log(this)
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar = (e) => {
        console.log("restando")
        console.log(this)
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES7</h2>
                
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>

                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}