import { useEffect, useState } from "react";
import CreateRota from "./create_rota.js";
import dados from "../../dados.js";
import "./style.css";
import rota1 from "../../images/rota_1.png";

const Administrador = () => {
  const [listRota, setListRota] = useState([]);
  const [create, setCreate] = useState(false);

  useEffect(() => {
    setListRota(dados.returnRota());
  }, []);

  const create_rota = () => {
    if(create){
      setCreate(false);
    } else {
      setCreate(true);
    }
  }

  return(
    <>
    { (!create) ?
    <div className="adm-container">
      <img className="adm-mapa-rota" src={rota1} />
      <div className="adm-right">
        <div className="adm-list-rotas-container">
          {listRota.map((r, key) => (
            <div className="adm-card-rota" key={key} value={key}>
              <p>{r.nome_rota}</p>
              <p>{r.motorista}</p>
              <p>{r.veiculo}</p>
              <p>{r.hora_inicio}</p>
              <p>{r.status}</p>
            </div>
          ))}
        </div>
        <button className="create-button" onClick={create_rota}>Criar Rota</button>
      </div>
    </div>
    :
    <div className="create-container">
      <CreateRota create_rota={create_rota}/>
    </div>
    }
    </>
  );
}

export default Administrador;