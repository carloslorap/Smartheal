import React, { useState, useEffect } from 'react';
import '../style/Hiatorial.css'
import usericon from '../assets/nuevo-user.png'
import usericonsmall  from '../assets/medic (1).png'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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


    <section className="contact"> 
    <div className="container contact_container">
        <aside className="contact_aside">
            <div className="aside_image">
                <img src={usericon} alt='ef'/>
            </div>
            <h2 id='nombre'>Name User</h2>
            <p className='dni' >DNI: <span id='dni'>0000000</span></p>
            <ul className="contact_details">
               
                    <h5>Nombre completo</h5>
                    <p id='nombrecompleto'>full username</p>
                    <br/>
                      <h5>Numero de celular</h5>
                    <p id='celular'>000000000</p>
              
            </ul>
            <ul className="contact_socials">
          

            </ul>
        </aside>


    <div className='table_desc'>
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
                  <img src={usericonsmall} alt="perfil" className='td_img'/>
                </td>
                <td>{dato.nameMedic}</td>
                <td>{dato.nameSpecialty}</td>
                <td>
                  <motion.button
                  whileTap={{scale:1.2}}  onClick={() => handleVerMasClick(dato)} className='ver_btn'>ver más</motion.button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        </div>
    </div>
</section>





      

  )
}

export default HistorialUser



