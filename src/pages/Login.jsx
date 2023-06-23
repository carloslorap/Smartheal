import React from "react";
import back from "../assets/Rectangle 62.png";
import "../style/login.css";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
      <div className="content-login">
       

        <div className="grid1">
            <h2 className="title">Welcome</h2>
            <p className="text--center1"> You can book medical appointments too<br/> collect your results and more.</p>
            
          <form method="POST" class="form login">
            <div className="form_field">
              <label>
              <i class="ri-user-fill"></i>
              </label>
              <input type="text" name="id" className="form_input" placeholder="DNI" required />
            </div>
            <div className="form_field">
              <label>
              <i class="ri-lock-fill"></i>
              </label>
              <input type="text" name="contrasena" className="form_input" placeholder="Contraseña" required />
            </div>
            <div className="form_field">
              <button className="submitButton" type="submit">
                Ingresar
              </button>
            </div>
          </form>
          <p className="text--center">
            Not a member? <Link to='/register' style={{color:"#ACD2FF",fontWeight:'bold'}}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
