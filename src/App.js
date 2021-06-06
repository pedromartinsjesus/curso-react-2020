import React from "react";


function App(props) {

  const modificaNome = (event) => {
    console.log(event.target.value);

  }

  const criaComboBox = () => {
    const opccoes = ["fulano", "Ciclano"];
    const comboOptions = opccoes.map((opcao, i) => <option key={i}>{opcao}</option>);

    return (
      <select>
        {comboOptions}
      </select>
    )
  }

  const MeucomboBox = () => criaComboBox();

  return (
    <>
      <input className="texto-centralizado" type="text" value={props.nome} onChange={modificaNome} />
      <h1>Hello {props.nome}</h1>
      <MeucomboBox />
    </>
  )
}

export default App;
