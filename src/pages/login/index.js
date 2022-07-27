import {useState} from "react";
import TypeLogin from "./type_login";
import MotLogin from "./mot_login";
import AdmLogin from "./adm_login";
import "./style.css";

const Login = () =>{
  const [typeLogin, setTypeLogin] = useState("");

  const alterTypeLogin = (type) => {
    setTypeLogin(type);
  }

  return(
    <div className="login-container">
      <h1>Login</h1>
      {
        typeLogin === "adm" ? <AdmLogin alterTypeLogin = {alterTypeLogin}/> 
        : typeLogin === "mot"? <MotLogin alterTypeLogin = {alterTypeLogin}/> 
        : <TypeLogin alterTypeLogin = {alterTypeLogin}/>
      }
    </div>
  );
}

export default Login;