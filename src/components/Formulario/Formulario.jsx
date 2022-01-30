import React, { Component } from "react";
import "./estilo.css";
import { Button } from 'react-bootstrap';

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.nome = "";
        this.tipo = "";
    }

    _armazenaNome(event) {
        this.nome = event.target.value;
    }

    _armazenatipo(event) {
        this.tipo = event.target.value;
    }

    _criarLinhaTabela(event) {
        event.preventDefault();
        this.props.adicionarTabela(this.nome, this.tipo);
    }

    render() {
        return (
           
                <form className="formulario" onSubmit={this._criarLinhaTabela.bind(this)}>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" onChange={this._armazenaNome.bind(this)} />
                    <label htmlFor="tipo">Tipo:</label>
                    <select onChange={this._armazenatipo.bind(this)}>
                        <option></option>
                        <option>Magia</option>
                        <option>Ataque</option>
                        <option>Defesa</option>
                    </select>
                    <button className="btn-adicionar">Adicionar</button>
                </form>
         
        );
    };
}

export default Formulario;