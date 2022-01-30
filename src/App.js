import React, { Component } from "react";
import "./assets/App.css";

import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela";
import Legenda from "./components/Legenda";

class App extends Component {
    constructor() {
      super();
      this.state = {
        valor: "",
        tipo: ""
      }
      
    };

    adicionarTabela(nome, tipo) {
      /*const novaLinha = { nome, tipo };
      const arrayState = [...this.state.linhaTabela, novaLinha];
      const novoState = {
        linhaTabela: arrayState
      };
      this.setState(novoState);
      console.log(this.state.linhaTabela);*/
      const newValue = {
        valor: nome,
        tipo: tipo
      }
      this.setState(newValue);
    };
    
    render() {
      return (
        <section>
          <Titulo />
            <section className="conteudo">
              <Formulario adicionarTabela={this.adicionarTabela.bind(this)}/>
              <Tabela conteudoNome={this.state.valor} conteudoTipo={this.state.tipo}/>
              <Legenda />
            </section>
        </section>
      );
    };
}

export default App;
