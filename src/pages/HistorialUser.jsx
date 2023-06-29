import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import '../style/Hiatorial.css'
import user from '../assets/user.png'
import usericon from '../assets/user-icon.png'
import { Link } from 'react-router-dom';

const HistorialUser = () => {

  //CONSUMIENDO API RESULTADOS  
  const [datos, setDatos] = useState([]);
  const username = localStorage.getItem("username"); 
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Llamada a la API con el token y el id de usuario
    fetch(`https://smarth-resultdado-service.up.railway.app/resultado?nameMedic=${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Filtrar los datos por nameMedic y username
        const filteredData = data.filter((item) => item.nameMedic === localStorage.getItem("username"));
        setDatos(filteredData);
      })
      .catch((error) => console.log(error));
  }, [username, token]);

  //COMSUMIENDO DATOS DE API USUARIOS
  const usernameLocalStorage = localStorage.getItem('username');

  // Realiza una petición a tu API
  fetch('https://smarth-user-service.up.railway.app/usuarios', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => response.json())
    .then(data => {
      // Filtra los datos de la lista de usuarios basado en el nombre de usuario
      const usuario = data.find(user => user.username === usernameLocalStorage);

      document.getElementById('nombre').innerText = usuario.username;

      const nombreCompleto = `${usuario.username} ${usuario.lastname}`;

      document.getElementById('nombrecompleto').innerText = nombreCompleto;
      document.getElementById('dni').innerText = usuario.userid;
      document.getElementById('celular').innerText = usuario.phone;
    })
    .catch(error => {
      console.error('Error al obtener los datos de la API:', error);
    });



  return (
    <Container>


      <div class="container">
        <div class="cuadro">
          <img class="user" src={user} alt='perfil-usuario' />

          {/* cuadro del usuario */}
          <div class="text-usuario">
            <h5 id="nombre">usuario</h5>
            <p>DNI:<p id="dni">00000000</p></p>
          </div>

          {/* cuadro del nombre completo */}
          <div class="text-nombreCompleto">
            <h5>Nombre Completo</h5>
            <p id="nombrecompleto">nombre-completo</p>
          </div>

          {/* cuadro del telefono */}
          <div class="text-telefono">
            <h5>Numero de celular</h5>
            <p id="celular">+51987567345</p>
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
              {datos.map((dato) => (
                <tr key={dato.id}>
                  <td>
                    <img src={usericon} alt="perfil" />
                  </td>
                  <td>{dato.nameMedic}</td>
                  <td>{dato.nameSpecialty}</td>
                  <td>{dato.idUser}</td>
                  <td>
                    <Link to="/historial2">
                      <button>ver mas</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </Container>

  )
}

export default HistorialUser