import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "Verdadero" : "Falso"}</li>
                <li>{props.arreglo.join(', ')}</li>
                <li>{props.objeto.nombre + " - " + props.objeto.correo }</li>
                <li>{props.arreglo.map(props.funcion).join(', ')}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
}
//los booleanos solo aparecen el las props de la consola
Propiedades.defaultProps = {
    porDefecto: "Las Props"
}

Propiedades.propTypes = {
    //Si quiero que forzosamente sea un número
    numero: PropTypes.number.isRequired
}