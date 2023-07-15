import axios from "axios";
import { toast } from "react-toastify";
export const HistorialMedic=(his)=>{
 
    axios.post('https://smart-resultados.azurewebsites.net/resultado', his)
    .then(response => {
      console.log(response.data); 
      // handle success response
      toast.success('successful sent history')
    })
    .catch(error => {
      console.log(error.response.data);
      // handle error response
      toast.error('Failed to send history')
    });
}


//https://smarth-resultdado-service.up.railway.app/resultado