import "./style.css";
import { useState } from "react";
function App() {
  const[conta, setconta]=useState(0);
  const[poscentagem,setporcentagem]=useState(0);
  const[resultado,setresultado]=useState(0);
  const calcular=()=>{
    let calculo = Number(conta)+ Number(poscentagem)/100;
    setresultado(calculo);
  }
    return (
    <div className="container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3znCUn6eyb8BI3J6gyuSEeFhaaJCJxqmhFA&usqp=CAU" alt="" srcset="" />
      <div >
        <h1>Calculadora de Gorjeta</h1>
        <h2>Digite o valor da conta</h2>
        <input type="text" name="" id="" placeholder="Ex: 50.00" onChange={(txt)=>setconta(txt.target.value)}/><br />
        <h2>Selecione a porcentagem da gorgeta</h2>
        
        <select onChange={(txt)=>setporcentagem(txt.target.value)}>
          <option>Selecione</option>
          <option value="5">5%</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
        </select><br />
        <button onClick={calcular}>Calcular</button>
        {resultado < 1  || resultado === 0 ? null : <h2>Resultado:{resultado}</h2> }
        
      </div>
    </div>);
}

export default App;