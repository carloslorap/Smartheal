import React from 'react'
import { toast } from 'react-toastify';

import {Container,Row,Col, Form,FormGroup} from 'reactstrap';
import {HistorialMedic} from '../components/api/Historial_Medic'


const HistorialMed = () => {

  return (
    <section>
    <Container>
      <Row>
        <Col lg='12'>

            <h4 className='mb-5'>History Medic</h4>
          <Form onSubmit={(event)=>{
               event.preventDefault();
               const historial = { 
                idUser: event.target.idUser.value,
                nameMedic: event.target.nameMedic.value,
                nameSpecialty: event.target.nameSpecialty.value,
                diagnosis: event.target.diagnosis.value,
                treatment: event.target.treatment.value,
                recommendations: event.target.recommendations.value
               };
                HistorialMedic(historial)
               
              
            }}>
    
            <FormGroup className='form_group'>
              <span>Num Doc</span>
              <input type='number' placeholder='Num.doc....' name='idUser' required/>
              
            </FormGroup>
            <FormGroup className='form_group'>
              <span>Name doctor</span>
              <input type='text' placeholder='doctor name....' name='nameMedic' required/>
              
            </FormGroup>
            <FormGroup className='form_group'>
              <span>Name Specialty</span>
              <input type='text' placeholder='name Specialty....' name='nameSpecialty' required/>
          
            </FormGroup>
            <FormGroup className='form_group'>
              <span>Diagnosis</span>
              <input type='text' placeholder='write Diagnosis...' name='diagnosis' required/>
           
            </FormGroup>

            <div className='d-flex align-items-center justify-content-between gap-5'>
            <FormGroup className='form_group  w-50'>
              <span>Treatment</span>
              <input type='text' placeholder='write treatment....' name='treatment' required/>
         
            </FormGroup>
            <FormGroup className='form_group w-50'>
              <span>Recommendations</span>
             <input className='w-100 p-2' type='text' placeholder='write Recommendations...' name='recommendations' required/>


        
            </FormGroup>
            </div>

        

            <button className='buy_btn' type='submit'>Send History</button>
          </Form>
      
         
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default HistorialMed