import React from 'react'
import {Container,Row,Col, Form,FormGroup} from 'reactstrap';
import '../style/product-details.css'
import {registerDoc} from '../components/api/Add_doc.js'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const AddDoctors = () => {


  const navigate=useNavigate();
 
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
  
               <h4 className='mb-5'>Add Doctor</h4>
            <Form onSubmit={(event)=>{
               event.preventDefault();
               const docRegistre = {
                 id: event.target.id.value,
                 nombre: event.target.nombre.value,
                 apellido: event.target.apellido.value,
                 fecha_nacimiento: event.target.fecha_nacimiento.value,
                 correo_electronico: event.target.correo_electronico.value,
                 contrasena: event.target.contrasena.value,
                 telefono: event.target.telefono.value
               };
               registerDoc(docRegistre);
               toast.success('Add Doctor success')
               navigate('/dashboard/dosctors')
            }}>
              <FormGroup className='form_group'>
                <span>Num Doc</span>
                <input type='text' placeholder='Num.doc....' name='id' required/>
                
              </FormGroup>
              <FormGroup className='form_group'>
                <span>Name doctor</span>
                <input type='text' placeholder='Name....' name='nombre' required/>
                
              </FormGroup>
              <FormGroup className='form_group'>
                <span>Last name doctor</span>
                <input type='text' placeholder='Lastname....' name='apellido' required/>
            
              </FormGroup>
              <FormGroup className='form_group'>
                <span>Email</span>
                <input type='email' placeholder='Email...' name='correo_electronico' required/>
             
              </FormGroup>

              <div className='d-flex align-items-center justify-content-between gap-5'>
              <FormGroup className='form_group  w-50'>
                <span>Password</span>
                <input type='text' placeholder='password....' name='contrasena' required/>
           
              </FormGroup>
              <FormGroup className='form_group w-50'>
                <span>Birthday Date</span>
               <input className='w-100 p-2' type='date' placeholder='Birthday Date...' name='fecha_nacimiento' required/>


          
              </FormGroup>
              </div>

              <div>
              <FormGroup className='form_group'>
                <span>Phone doctor</span>
                <input type='text' placeholder='Phone number....' name='telefono' required/>
              </FormGroup>
              </div>

              <button className='buy_btn' type='submit'>Add Doctor</button>
            </Form>
        
           
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddDoctors