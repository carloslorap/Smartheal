import React from "react";
import back from "../assets/Rectangle 62.png";
import { Link } from "react-router-dom";
import '../style/register.css'
import {registerUser} from '../components/api/api_registro.js';
 import {toast} from 'react-toastify'
 import { useNavigate } from "react-router-dom";

const Register = () => {
   const navigate =useNavigate();

  return (
    <div>
      <div className="content-login">
        <div className="content-img">
          <img src={back} alt="" className="login-img" />
        </div>
            
        <div className="grid">
        
 
          <form onSubmit={(event) => {
            //para enviar la informacionn
            event.preventDefault();
            const userRegistre = {
              id: event.target.id.value,
              nombre: event.target.nombre.value,
              apellido: event.target.apellido.value,
              fecha_nacimiento: event.target.fecha_nacimiento.value,
              correo_electronico: event.target.correo_electronico.value,
              contrasena: event.target.contrasena.value,
              telefono: event.target.telefono.value
            };

            registerUser(userRegistre);

            console.log(userRegistre);

            toast.success('Account created')

            navigate('/login')
        
          }} 
          
          class="form login">
          <h2 className="title1">Enter your details correctly</h2>
            <div className="form-1">
              <div className="form_field1">
                <label>
                <i class="ri-psychotherapy-fill"></i>
                </label>
                <input
                  type="text"
                  name="nombre"
                  className="form_input1"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form_field1 field-1">
                <label>
                <i class="ri-heart-pulse-fill"></i>
                </label>
                <input
                  type="text"
                  name="apellido"
                  className="form_input1"
                  placeholder="Last name"
                  required
                />
              </div>
              <div className="form_field1 ">
                <label>
                <i class="ri-calendar-2-fill"></i>
                </label>
                <input
                  type="date"
                  name="fecha_nacimiento"
                  className="form_input1"
                  placeholder="Birthday Date"
                  required
                />
              </div>
              <div className="form_field1 field-1">
                <label>
                <i class="ri-phone-fill"></i>
                </label>
                <input
                  type="text"
                  name="telefono"
                  className="form_input1"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>



            <div className="form_field">
              <label>
                <i class="ri-profile-fill"></i>
              </label>
              <input
                type="text"
                name="id"
                className="form_input"
                placeholder="Document number"
                required
              />
            </div>
            <div className="form_field">
              <label>
              <i class="ri-mail-line"></i>
              </label>
              <input
                type="email"
                name="correo_electronico"
                className="form_input"
                placeholder="Email"
                required
              />
            </div>
            <div className="form_field">
              <label>
                <i class="ri-lock-fill"></i>
              </label>
              <input
                type="password"
                name="contrasena"
                className="form_input"
                placeholder="Password"
                required
              />
            </div>
            <div className="form_field">
              <button className="submitButton" type="submit">
                Register
              </button>
            </div>
          </form>
          <p className="text--center">
          do you already have an account?{" "}
            <Link
              to="/login"
              style={{ color: "#ACD2FF", fontWeight: "bold" }}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
