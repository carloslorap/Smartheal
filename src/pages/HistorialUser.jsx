import React, { useState, useEffect } from "react";
import "../style/Hiatorial.css";
import usericon from "../assets/nuevo-user.png";
import usericonsmall from "../assets/medic (1).png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HistorialUser = () => {
  //CONSUMIENDO API RESULTADOS
  const [datos, setDatos] = useState([]);
  const token = localStorage.getItem("token");
  const [modalVisible, setModalVisible] = useState(false);


  const OpenModal =()=> {
    setModalVisible(true);
  }
  const CloseModal =()=> {
    setModalVisible(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      // Realizar la llamada a la API incluyendo el token en el encabezado de la solicitud
      const response = await fetch(
        "https://smarth-user-service.azurewebsites.net/usuarios/getAllResult",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      setDatos(data);
    };

    fetchData();
  }, [token]);

  //COMSUMIENDO DATOS DE API USUARIOS-------------------------------------

  // Realiza una petición a tu API
  fetch(
    "https://smarth-user-service.azurewebsites.net/usuarios/userLogin/actual",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("nombre").innerText = data.username;
      const nombreCompleto = `${data.username} ${data.lastname}`;
      document.getElementById("nombrecompleto").innerText = nombreCompleto;
      document.getElementById("dni").innerText = data.userid;
      document.getElementById("celular").innerText = data.phone;
    })
    .catch((error) => {
      console.error("Error al obtener los datos de la API:", error);
    });

  const navigate = useNavigate();

  const handleVerMasClick = (dato) => {
    navigate(`/historial2/${dato.idResult}`, { state: { dato } });
  };

  return (
    <section className="contact">
      <div class={`overlay ${modalVisible ? 'visible' :''}`}>
        <div class="slideshow">

          <div className="content_modal">
          <motion.span  onClick={CloseModal} whileTap={{ scale: 1.2 }} class="btn_cerrar"><i class="ri-close-circle-fill close_icon"></i></motion.span>
            <h5>Change Number</h5>
            <p>
              Remember that you must change to put your real number for which it
              would be one of the means of channels that we can contact you
              through your information.
            </p>

            <form className="form_num_change">
              <input type="number" />
              <button className="buy_btn">Change</button>
            </form>
          </div>
        </div>
      </div>

      <div className="container contact_container">
        <aside className="contact_aside">
          <div className="aside_image">
            <img src={usericon} alt="ef" />
          </div>
          <h2 id="nombre">Name User</h2>
          <p className="dni">
            DNI: <span id="dni">0000000</span>
          </p>
          <ul className="contact_details">
            <h5>Nombre completo</h5>
            <p id="nombrecompleto">full username</p>
            <br />
            <h5>Numero de celular</h5>
            <p id="celular">000000000</p>

            <motion.button onClick={OpenModal} whileTap={{ scale: 1.2 }} className="buy_btn">Change Phone</motion.button>
          </ul>
          <ul className="contact_socials"></ul>
        </aside>

        <div className="table_desc">
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
              {datos.map((dato) => (
                <tr key={dato.idResult}>
                  <td>
                    <img src={usericonsmall} alt="perfil" className="td_img" />
                  </td>
                  <td>{dato.nameMedic}</td>
                  <td>{dato.nameSpecialty}</td>
                  <td>
                    <motion.button
                      whileTap={{ scale: 1.2 }}
                      onClick={() => handleVerMasClick(dato)}
                      className="ver_btn"
                      id="btn_open"
                    >
                      SEE MORE
                    </motion.button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default HistorialUser;
