
import axios from "axios";

import { toast } from "react-toastify";

//conexion con la api ruta pacientess
export const registerUser = (userRegistre) => {
    
 
    axios.post('https://smarth-user-service.azurewebsites.net/user-service/register',userRegistre)
      .then(response => {
        console.log(response.data); 
        // handle success response
        toast.success('Account created') 
      })
      .catch(error => {
        console.log(error.response.data);
        toast.error('Account Failed')
        // handle error response
      });
  };