import React from "react";


function ComponenteFuncional() {
  return (
    <h1>
      Hello World
    </h1>
  );
}


class App extends React.Component {

  state = {
    nome: ""
  }


  modificaNome = (event) => {
    let novoNome = event.target.value;
    this.setState({ nome: novoNome });
  }

  criaComboBox = () => {
    const opccoes = ["fulano", "Ciclano"];
    const comboOptions = opccoes.map((opcao, i) => <option key={i}>{opcao}</option>);

    return (
      <select>
        {comboOptions}
      </select>
    )
  }

  componentDidMount() {
    console.log("Executou o componentDidMount()");
  }

  render() {
    console.log("executou o render()");



    return (

      <>
        <input type="text" value={this.state.nome} onChange={this.modificaNome} />
        <h1>Hello {this.props.nome}</h1>

      </>
    )
  }
}

export default App;
