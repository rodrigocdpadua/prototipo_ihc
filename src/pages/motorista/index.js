import { useEffect, useState } from "react";
import dados from "../../dados.js";
import RotaDatails from "./rota_details";
import "./style.css";

const Motorista = () => {
  const [rota, setRota] = useState('');
  const [listRota, setListRota] = useState([]);

  useEffect(() => {
    setListRota(dados.returnRota());
  }, []);

  const selectRota = (e) => {
    e.preventDefault();
    setRota(e.target.getAttribute("value"));
  }

  return(
    <>
      {rota === '' ?
      <div className="mot-container">
        <div className="list-rotas-container">
          {listRota.map((r, key) => (
            r.status === "Aberta" ?
            <div className="card-rota" key={key} value={key} onClick={selectRota}>
              <p>{r.nome_rota}</p>
              <p>{r.motorista}</p>
              <p>{r.veiculo}</p>
              <p>{r.hora_inicio}</p>
            </div>
            :
            ''
          ))}
        </div>
      </div>
      :
      <div className="mot-container">
        <div className="list-rotas-container">
          <RotaDatails selectRota={selectRota} rota={listRota[rota]}/>
        </div>
      </div>
      }
    </>
  );
}

export default Motorista;