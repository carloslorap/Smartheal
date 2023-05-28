import axios from "axios";

//conexion con la api ruta pacientess
export const registerDoc = (docRegistre) => {
    // asigando el rol_id numero 2 automaticamente
    docRegistre.rol_id = {"id":3,"nombre":"medico","estado":true};
    docRegistre.estado = true;
    axios.post('https://smarthhealth360.up.railway.app/home/paciente', docRegistre)
      .then(response => {
        console.log(response.data); 
        // handle success response
      })
      .catch(error => {
        console.log(error.response.data);
        // handle error response
      });
  };