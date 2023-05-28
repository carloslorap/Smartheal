import React,{useState,useEffect} from 'react'
import { Container,Row,Col } from 'reactstrap'
import doc_icon from '../assets/medic (1).png'
import axios from 'axios';
import {toast}from 'react-toastify'

const Doctors = () => {
    const[doctors,setDoctors]=useState([])


    useEffect(()=>{
        const getDoctors= async()=>{
            const response= await axios.get('https://smarthhealth360.up.railway.app/home/paciente');
            setDoctors(response.data);
        };
        getDoctors()
       

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
                <Col lg='12'><h4 className='fw-bold'>Doctors</h4></Col>
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
                             
                             doctors.filter(doc=>doc.rol_id.id===3).map(
                                doc =>(
                                    <tr key={doc.id}>
                                    <td><img src={doc_icon} alt=''/></td>
                                    <td>{doc.nombre}</td>
                                    <td>{doc.apellido}</td>
                                    <td>{doc.correo_electronico}</td>
                                    <td><div className='d-flex' onClick={()=>{deleteUser(doc.id)}}>{doc.estado ?(<button className='btn btn-success'>Active</button>):(<button className='btn btn-danger'>Inactive</button>)}</div></td>
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

export default Doctors