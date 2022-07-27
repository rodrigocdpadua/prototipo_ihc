import "./style.css";

const MotLogin = (props) => {
  const backType = () => {
    props.alterTypeLogin("");
  }

  return(
    <div className="login-card">
      <h2>Mototorista</h2>
      <input className="input-login" placeholder="user"/>
      <input className="input-login" type="password" placeholder="password"/>
      <button className="type-button" type="button"><a href="/mot">Entrar</a></button>
      <button className="type-button" type="button" onClick={backType}>Voltar</button>
    </div>
  );
}

export default MotLogin;