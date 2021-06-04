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
    nome: "Douglas Souza"
  }

  render() {
    return (
      <h1>Hello {this.state.nome}</h1>
    )
  }
}

export default App;
