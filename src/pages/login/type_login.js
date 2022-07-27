import "./style.css";

const TypeLogin = (props) => {
  const admType = () => {
    props.alterTypeLogin("adm");
  }
  const motType = () => {
    props.alterTypeLogin("mot");
  }

  return(
    <div className="type-login-container">
      <button className="type-button" type="button" onClick={admType}>Administrador</button>
      <button className="type-button" type="button" onClick={motType}>Motorista</button>
    </div>
  );
}

export default TypeLogin;