import React, { Component } from "react";
import "./estilo.css";

import Table from 'react-bootstrap/Table';

class Tabela extends Component {
    render() {
        let brasao = "";
        if(this.props.conteudoTipo === "Magia") {
            brasao = "Azul";
        } else if(this.props.conteudoTipo === "Ataque") {
            brasao = "Amarelo";
          } else if(this.props.conteudoTipo === "Defesa") {
                brasao = "Verde";
            } else {
                brasao = "";
            }
            

        return(
            
            <div className="tabela">
                <table className="tabela-principal">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Tipo</th>
                            <th>Brasão</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.conteudoNome}</td>
                            <td>{this.props.conteudoTipo}</td>
                            <td>{brasao}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };
}

export default Tabela;