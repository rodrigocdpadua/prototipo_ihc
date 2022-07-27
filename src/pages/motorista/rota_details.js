import { useState } from "react";
import dados from "../../dados.js";
import rota1 from "../../images/rota_1.png";
import "./style.css";

const RotaDatails = (props) => {
  const [startButton, setStartButton] = useState(true);
  const [startRota, setStartRota] = useState(false);
  const [concluiRota, setConcluiRota] = useState(false);
  const [checkoutCompleto, setCheckoutCompleto] = useState(false);

  const changeStartButton = () => {
    if(startButton){
      setStartButton(false);
    } else{
      setStartButton(true);
    }
  }
  const changeStartRota = () => {
    if(!startRota){
      setStartRota(true);
    }
  }
  const concluirRota = () => {
    if(!concluiRota){
      setConcluiRota(true);
      setStartButton(true);
    }
  }
  const changeCheckoutCompleto = () => {
    setCheckoutCompleto(true);
  }

  const back = (e) => {
    props.selectRota(e);
  }
  const enviar = (e) => {
    dados.alterStatus(props.rota);
    props.selectRota(e);
  }

  return(
    <div className="rota-details-container">
      <img className="mapa-rota" src={rota1} alt="mapa"/>
      <div className="rota-details">
        <h1>{props.rota.nome_rota}</h1>
        <p>{props.rota.motorista}</p>
        <p>{props.rota.veiculo}</p>
        <p>{props.rota.hora_inicio}</p>
        <label><input type="checkbox" className="input-box" value="Checkout" onChange={changeStartButton} disabled={startRota}/>Checkout Pré-Rota</label>
        {
          concluiRota ?
          <label><input type="checkbox" className="input-box" value="Checkout" onChange={changeCheckoutCompleto}/>Checkout Pós-Rota</label>
          : ""
        }
        {
          checkoutCompleto ?
          <button className="start-button" type="button" value="" disabled={!checkoutCompleto} onClick={enviar}>Enviar</button>
          :
          startRota ?
          <button className="start-button" type="button" disabled={startButton} onClick={concluirRota}>Concluir Rota</button>
          :
          <button className="start-button" type="button" disabled={startButton} onClick={changeStartRota}>Iniciar</button>
        }
        <button className="back-button" type="button" value="" onClick={back}>Voltar</button>
      </div>
    </div>
  );
}

export default RotaDatails;