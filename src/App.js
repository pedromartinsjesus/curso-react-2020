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

  render() {
    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.modificaNome} />
        <h1>Hello {this.state.nome}</h1>
      </>
    )
  }
}

export default App;
