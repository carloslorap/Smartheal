import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import '../style/Hiatorial.css'
import user from '../assets/user.png'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const HistorialUser = ({ match }) => {

  const token = localStorage.getItem('token');

  fetch('https://smarth-user-service.up.railway.app/usuarios/userLogin/actual', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => response.json())
    .then((data) => {
      document.getElementById('nombre').innerText = data.username;
      const nombreCompleto = `${data.username} ${data.lastname}`;
      document.getElementById('nombrecompleto').innerText = nombreCompleto;
      document.getElementById('dni').innerText = data.userid;
      document.getElementById('celular').innerText = data.phone;
    })
    .catch(error => {
      console.error('Error al obtener los datos de la API:', error);
    });


  //OBTENIEDO LOS DATOS DEPENDIENDO DE LA ID DEL HISTORIAL MEDICO
  const location = useLocation();
  const { dato } = location.state;
  const [datos4, setDatos4] = useState(null);


  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await axios.get(`https://smarth-resultdado-service.up.railway.app/resultado/${dato.idResult}`);
        setDatos4(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerDatos();
  }, [dato]);


  return (
    <Container>


      <div className="container">
        <div className="cuadro">
          <img className="user" src={user} alt='perfil' />

          {/* cuadro del usuario */}
          <div className="text-usuario">
            <h5 id="nombre">usuario</h5>
            <p>DNI:</p>
            <p id="dni">00000000</p>
          </div>

          {/* cuadro del nombre completo */}
          <div className="text-nombreCompleto">
            <h5>Nombre Completo</h5>
            <p id="nombrecompleto">nombre-completo</p>
          </div>

          {/* cuadro del telefono */}
          <div className="text-telefono">
            <h5>Numero de celular</h5>
            <p id="celular">+51000000000</p>
          </div>

          <button className="boton">Editar numero de celular</button>

        </div>
      </div>

      <div className="historialMedic">
        <div id="text-dia">
          <h5>Diagnóstico</h5>
          <p className='diag'>{datos4?.diagnosis}</p>
        </div>

        <div id="text-tra">
          <h5>Tratamiento</h5>
          <p className='trat'>{datos4?.treatment}</p>
        </div>


        <div id="text-ra">
          <h5>Recomendacion</h5>
          <p className='reco'>{datos4?.recommendations}</p>
        </div>

        <Link to="/historial">
          <button className="regresar">regresar</button>
        </Link>

      </div>

    </Container>

  )
}

export default HistorialUser