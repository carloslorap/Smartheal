import axios from "axios";

//conexion con la api ruta pacientess
export const registerUser = (userRegistre) => {
    // asigando el rol_id numero 2 automaticamente
    userRegistre.rol_id = {"id":2,"nombre":"cliente","estado":true};
    userRegistre.estado = true;
    axios.post('https://smarthhealth360.up.railway.app/home/paciente', userRegistre)
      .then(response => {
        console.log(response.data); 
        // handle success response
      })
      .catch(error => {
        console.log(error.response.data);
        // handle error response
      });
  };