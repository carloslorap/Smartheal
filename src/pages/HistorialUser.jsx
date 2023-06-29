import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import '../style/Hiatorial.css'
import axios from 'axios';
import hist from '../assets/hh.webp'
import user from '../assets/user.png'
import usericon from '../assets/user-icon.png'
import { Link } from 'react-router-dom';

const HistorialUser = () => {

  /* const [userData, setUserData] = useState({});
  const [resultData, setResultData] = useState({});

  const fetchUserData = async () => {
    try {
      const response = await axios.get('https://smarth-user-service.up.railway.app/usuarios');
      const user = response.data.find(user => user.userid === 78102455);
      setUserData(user);
      
    } catch (error) {
      console.log(error);
    }
  };


  const fetchResultData = async () => {
    try {
      const response = await axios.get('https://smarth-resultdado-service.up.railway.app/resultado');
      const result = response.data.find(result => result.idResult === 1);
      setResultData(result);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchResultData()
  }, []); */

  return (
    <Container>


      <div class="container">
        <div class="cuadro">
          <img class="user" src={user} />

          {/* cuadro del usuario */}
          <div class="text-usuario">
            <h5 id="nombre">usuario</h5>
            <p>DNI: 00000000</p>
          </div>

          {/* cuadro del nombre completo */}
          <div class="text-nombreCompleto">
            <h5>Nombre Completo</h5>
            <p>nombre-completo</p>
          </div>

          {/* cuadro del telefono */}
          <div class="text-telefono">
            <h5>Numero de celular</h5>
            <p>+51987567345</p>
          </div>

          <button class="boton">Editar numero de celular</button>

        </div>
      </div>

      <div class="clinic-table-container">
        <div class="clinic-table">
          <table>
            <thead>
              <tr>
                <th>Perfil</th>
                <th>Doctor</th>
                <th>Especialidad</th>
                <th>Fecha</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src={usericon} alt="" /></td>
                <td>John Doe</td>
                <td>especialidad</td>
                <td>18/05/2023</td>
                <td>
                  <Link to="/historial2">
                    <button>ver mas</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td><img src={usericon} alt="" /></td>
                <td>Jane Smith</td>
                <td>especialidad</td>
                <td>10/09/2023</td>
                <td>
                  <Link to="/historial2">
                    <button>ver mas</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td><img src={usericon} alt="" /></td>
                <td>Carlos García</td>
                <td>especialidad</td>
                <td>08/12/2023</td>
                <td>
                  <Link to="/historial2">
                    <button>ver mas</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </Container>

  )
}

export default HistorialUser