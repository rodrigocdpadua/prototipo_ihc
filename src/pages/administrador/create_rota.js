import { useState } from "react";
import dados from "../../dados.js";
import "./style.css";

const CreateRota = (props) => {
  const [rota, setRota] = useState();
  const [motorista, setMotorista] = useState();
  const [veiculo, setVeiculo] = useState();
  const [horaInicio, setHoraInicio] = useState();

  const submitForm = () => {
    dados.addRota(rota, motorista, veiculo, horaInicio);
    
    props.create_rota();
  }

  const changeRota = (e) => {
    setRota(e.target.value);
  }
  const changeMotorista = (e) => {
    setMotorista(e.target.value);
  }
  const changeVeiculo = (e) => {
    setVeiculo(e.target.value);
  }
  const changeHoraInicio = (e) => {
    setHoraInicio(e.target.value);
  }

  return(
    <div className="form-rota">
      <div class="element-form">
        <label for="rota">Rota</label>
        <input value={rota} type="text" id="rota" class="input-text" onChange={changeRota} placeholder="Nome da Rota" />
      </div>

      <div class="element-form">
        <label for="motorista">Motorista</label>
        <input value={motorista} type="text" id="motorista" class="input-text" onChange={changeMotorista} placeholder="Nome do Motorista" />
      </div>

      <div class="element-form">
        <label for="veiculo">Veículo</label>
        <input value={veiculo} type="text" id="veiculo" class="input-text" onChange={changeVeiculo} placeholder="Nome/Apelido do Veículo" />
      </div>

      <div class="element-form">
        <label for="hora">Hora de Início</label>
        <input value={horaInicio} type="text" id="hora" class="input-text" onChange={changeHoraInicio} placeholder="Hora de Início" />
      </div>

      <div class="element-form">
        <button type="submit" id="submit" class="submit-button" onClick={submitForm}>Submit</button>
      </div>
    </div>
  );
}

export default CreateRota;