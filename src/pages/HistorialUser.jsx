import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import '../style/Hiatorial.css'
import user from '../assets/user.png'
import usericon from '../assets/user-icon.png'
import { useNavigate } from 'react-router-dom';

const HistorialUser = () => {

  //CONSUMIENDO API RESULTADOS  
  const [datos, setDatos] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {

      // Realizar la llamada a la API incluyendo el token en el encabezado de la solicitud
      const response = await fetch('https://smarth-user-service.up.railway.app/usuarios/getAllResult', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await response.json();
      setDatos(data);
    };

    fetchData();
  }, [token]);


  //COMSUMIENDO DATOS DE API USUARIOS-------------------------------------

  // Realiza una petición a tu API
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


  const navigate = useNavigate();

  const handleVerMasClick = (dato) => {
    navigate(`/historial2/${dato.idResult}`, { state: { dato } });
  };



  return (
    <Container>


      <div className="container">
        <div className="cuadro">
          <img className="user" src={user} alt='perfil-usuario' />

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
            <p id="celular">+51987567345</p>
          </div>

          <button className="boton">Editar numero de celular</button>

        </div>
      </div>

      <div className="clinic-table">
        <table>
          <thead>
            <tr>
              <th>Perfil</th>
              <th>Doctor</th>
              <th>Especialidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {datos.map(dato => (
              <tr key={dato.idResult}>
                <td>
                  <img src={usericon} alt="perfil" />
                </td>
                <td>{dato.nameMedic}</td>
                <td>{dato.nameSpecialty}</td>
                <td>
                  <button onClick={() => handleVerMasClick(dato)}>ver más</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </Container>

  )
}

export default HistorialUser