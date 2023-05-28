import React,{useState,useEffect} from 'react'
import { Container,Row,Col } from 'reactstrap'
import user_icon from '../assets/user-icon.png'
import axios from 'axios';
import {toast}from 'react-toastify'



const Users = () => {
    const[users,setUsers]=useState([])
    
    useEffect(()=>{
        const getUsers= async()=>{
            const response= await axios.get('https://smarthhealth360.up.railway.app/home/paciente');
            setUsers(response.data);
        };
        getUsers()
       
    },[]);


    function deleteUser(userId){
        fetch(`https://smarthhealth360.up.railway.app/home/paciente/${userId}`, {
          method: 'DELETE'
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
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                  
                                  {
                             
                                    users.filter(user=>user.rol_id.id===2).map(
                                        user =>(
                                           <tr key={user.id}>
                                           <td><img src={user_icon} alt=''/></td>
                                           <td>{user.nombre}</td>
                                           <td>{user.apellido}</td>
                                           <td>{user.correo_electronico}</td>
                                           <td><div className='d-flex' onClick={()=>{deleteUser(user.id)}}>{user.estado ?(<button className='btn btn-success'>Active</button>):(<button className='btn btn-danger'>Inactive</button>)}</div></td>
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