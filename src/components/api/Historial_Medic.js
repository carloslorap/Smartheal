import axios from "axios";
import { toast } from "react-toastify";
export const HistorialMedic=(his)=>{
 
    axios.post('https://smarth-resultado-service.azurewebsites.net/resultado', his)
    .then(response => {
      console.log(response.data); 
      // handle success response
      toast.success('Bien') 
    })
    .catch(error => {
      console.log(error.response.data);
      // handle error response
      toast.error(' Failed')
    });
}


//https://smarth-resultdado-service.up.railway.app/resultado