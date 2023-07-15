import axios from "axios";

//conexion con la api ruta pacientess
export const registerDoc = (docRegistre) => {

    
  
    // asigando el rol_id numero 2 automaticamente
    
    axios.post('https://smarth-user-service.azurewebsites.net/user-service/register/medic', docRegistre)
      .then(response => {
        console.log(response.data); 
        // handle success response
      })
      .catch(error => {
        console.log(error.response.data);
        // handle error response
      });
  };