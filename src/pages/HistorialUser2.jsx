import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import '../style/Hiatorial.css'
import user from '../assets/user.png'
import { Link } from 'react-router-dom';

const HistorialUser = () => {

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

          <Link to="/historial">
            <button class="regresar">regresar</button>
          </Link>

        </div>
      </div>

      <div class="historialMedic">
        <div id="text-dia">
          <h5>Diagnóstico</h5>
        </div>

        <div id="text-tra">
          <h5>Tratamiento</h5>
        </div>


        <div id="text-ra">
          <h5>Recomendacion</h5>
        </div>
      </div>

    </Container>

  )
}

export default HistorialUser