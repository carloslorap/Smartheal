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
                 userid: event.target.userid.value,
                 username: event.target.username.value,
                 lastname: event.target.lastname.value,
                 birthdate: event.target.birthdate.value,
                 password: event.target.password.value,
                 phone: event.target.phone.value
               };
               registerDoc(docRegistre);
               toast.success('Add Doctor success')
               navigate('/dashboard/dosctors')
            }}>
              <FormGroup className='form_group'>
                <span>Num Doc</span>
                <input type='text' placeholder='Num.doc....' name='userid' required/>
                
              </FormGroup>
              <FormGroup className='form_group'>
                <span>Name doctor</span>
                <input type='text' placeholder='Name....' name='username' required/>
                
              </FormGroup>
              <FormGroup className='form_group'>
                <span>Last name doctor</span>
                <input type='text' placeholder='Lastname....' name='lastname' required/>
            
              </FormGroup>


              <div className='d-flex align-items-center justify-content-between gap-5'>
              <FormGroup className='form_group  w-50'>
                <span>Password</span>
                <input type='text' placeholder='password....' name='password' required/>
           
              </FormGroup>
              <FormGroup className='form_group w-50'>
                <span>Birthday Date</span>
               <input className='w-100 p-2' type='date' placeholder='Birthday Date...' name='birthdate' required/>


          
              </FormGroup>
              </div>

              <div>
              <FormGroup className='form_group'>
                <span>Phone doctor</span>
                <input type='number' placeholder='Phone number....' name='phone' required/>
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