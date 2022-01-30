import React, { Component } from "react";
import "./estilo.css";

import Table from 'react-bootstrap/Table';

class Legenda extends Component {
    render() {
        return(
            <table className="legenda">
            <thead>
                <tr>
                    <th colSpan="2" scope="col">Legenda:</th>
                </tr>
                <tr>
                    <th scope="col">Tipo</th>
                    <th scope="col">Cor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Magia</td>
                    <td>Azul</td>
                </tr>
                <tr>
                    <td>Ataque</td>
                    <td>Verde</td>
                </tr>
                <tr>
                    <td>Defesa</td>
                    <td>Amarelo</td>
                </tr>
            </tbody>
            </table>
        );
    };
}

export default Legenda;