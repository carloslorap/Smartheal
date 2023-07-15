import React from "react";
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
    
            
        <div className="grid">
        
 
          <form onSubmit={(event) => {
            //para enviar la informacion
            event.preventDefault();
            const userRegistre = {
              userid: event.target.userid.value,
              username: event.target.username.value,
              lastname: event.target.lastname.value,
              birthdate: event.target.birthdate.value,
              password: event.target.password.value,
              phone: event.target.phone.value
            };

            registerUser(userRegistre);
            navigate("/login")
            console.log(userRegistre);

            
        
          }} 
          
          className="form login">
          <h2 className="title1">Enter your details correctly</h2>
            <div className="form-1">
              <div className="form_field1">
                <label>
                <i className="ri-psychotherapy-fill"></i>
                </label>
                <input
                  type="text"
                  name="username"
                  className="form_input1"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form_field1 field-1">
                <label>
                <i className="ri-heart-pulse-fill"></i>
                </label>
                <input
                  type="text"
                  name="lastname"
                  className="form_input1"
                  placeholder="Last name"
                  required
                />
              </div>
              <div className="form_field1 ">
                <label>
                <i className="ri-calendar-2-fill"></i>
                </label>
                <input
                  type="date"
                  name="birthdate"
                  className="form_input1"
                  placeholder="Birthday Date"
                  required
                />
              </div>
              <div className="form_field1 field-1">
                <label>
                <i className="ri-phone-fill"></i>
                </label>
                <input
                  type="text"
                  name="phone"
                  className="form_input1"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>



            <div className="form_field">
              <label>
                <i className="ri-profile-fill"></i>
              </label>
              <input
                type="text"
                name="userid"
                className="form_input"
                placeholder="Document number"
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
