import React,{useState,useEffect} from 'react'
import { Container,Row,Col } from 'reactstrap'
import user_icon from '../assets/user-icon.png'
import axios from 'axios';
import {toast}from 'react-toastify'



const Users = () => {
    const[users,setUsers]=useState([])
    const token = localStorage.getItem("token");
    useEffect(() =>{
      const hola = async () =>{
        try {
          const response = await axios.get('https://smarth-user-service.azurewebsites.net/user-service/usuarios',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUsers(response.data)
        } catch (error) {
          console.log(error)
        }

      
      }
      hola();
    },[token]);
    



    function deleteUser(userId){
      const token = localStorage.getItem('token');
        fetch(`https://smarth-user-service.azurewebsites.net/user-service/usuarios/${userId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}` // Incluye el token en el encabezado de autorización
          }
        })
        .then(response => {
          if (response.ok) {
            // Si la solicitud fue exitosa, actualiza la lista de usuarios
            console.log(`Usuario con id ${userId} eliminado`);
            toast.success(`Successful disabled user ${userId}`)
            // Aquí podrías actualizar tu lista de usuarios en el estado de tu componente
          } else {
            console.error(`No se pudo eliminar el usuario con id ${userId}`);
          }
        })
        .catch(error => console.error(error));
      }


  return (
    <section>
        <Container>
            <Row>
                <Col lg='12'><h4 className='fw-bold'>Users</h4></Col>
                <Col lg='12' className='pt-5'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Last name</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                  
                                  {
                             
                                    users.filter(user=>user.rol==="PATIENT").map(
                                        user =>(
                                           <tr key={user.userid}>
                                           <td><img src={user_icon} alt=''/></td>
                                           <td>{user.username}</td>
                                           <td>{user.lastname}</td>
                                           <td>{user.phone}</td>
                                           <td><div className='d-flex' onClick={()=>{deleteUser(user.userid)}}>{user.enable ?(<button className='btn btn-success'>Active</button>):(<button className='btn btn-danger'>Inactive</button>)}</div></td>
                                       </tr>
                                       )
                                    )
                                   } 
                         
                       
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Users