import React, { Component } from "react";

/* Un componente de clase está un poco en desuso, se usan los hooks ahora (funciones)
class Componente extends Component  {
    render() {
        return <h2>{this.props.msg}</h2>
    }
}

//Componente funcional hook
function Componente(props) {
    return <h2>{props.msg}</h2>
}
Otra Forma
*/

const Componente = (props) => <h2>{props.msg}</h2>

export default Componente