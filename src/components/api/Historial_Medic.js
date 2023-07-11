import axios from "axios";

export const HistorialMedic=(his)=>{
  his.state=true
    axios.post('https://smarth-user-service.azurewebsites.net/resultado', his)
    .then(response => {
      console.log(response.data); 
      // handle success response
    })
    .catch(error => {
      console.log(error.response.data);
      // handle error response
    });
}

//https://smarth-resultdado-service.up.railway.app/resultado