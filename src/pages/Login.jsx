import React, {useState} from "react";
import { motion } from 'framer-motion';
import "../style/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();

  // manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // hacer una petición POST a la API
      const response = await axios.post("https://smarth-user-service.up.railway.app/login", { username, password });

      const token = response.data.token;
      localStorage.setItem('token', token);


      const username1 = response.data.Username;
      localStorage.setItem("username", username1);
      
      navigate('/home');
      toast.success('Login Success')

      
    } catch (error) {
      // si hay un error, imprimirlo o mostrar el mensaje de error al usuario

      console.error(error);
      
      toast.error("wrong name or password")
    }
  };

  return (
    <div>
      <div className="content-login">
        <div className="grid1">
          <h2 className="title">Welcome</h2>
          <p className="text--center1">
            You can book medical appointments too<br /> collect your results and more.
          </p>

          <form onSubmit={handleSubmit} className="form login">
            <div className="form_field">
              <label>
                <i className="ri-user-fill"></i>
              </label>
              <input
                type="text"
                name="username"
                className="form_input"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="nombre"
                required
              />
            </div>
            <div className="form_field">
              <label>
                <i className="ri-lock-fill"></i>
              </label>
              <input
                type="password"
                name="password"
                className="form_input"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Contraseña"
                required
              />
            </div>
            <div className="form_field">
              <motion.button whileTap={{scale:0.95}} className="submitButton" type="submit">
                Ingresar
              </motion.button>
            </div>
          </form>
         
          <p className="text--center">
            Not a member?{" "}
            <Link to="/register" style={{ color: "#ACD2FF", fontWeight: "bold" }}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
