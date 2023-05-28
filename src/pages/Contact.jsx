import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Contact = () => {
  return (
    <div className="Tittle">
    
    
    <label><h1>Contactenos</h1> </label>

    <label>Nuestra direccion postal es :
564564 Lima Lima 
Perú
Telefono: 897897413132</label>

<div className ="form-card">

<h1 className="escribenos">Escribenos  </h1>
    <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> </Form.Label>
        <Form.Control type="email" placeholder="Nombre y Apellidos" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example text</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="outline-success"classNmae="search-botton" size="lg" type="submit">
    Enviar
  </Button>


    </Form>




    </div>

  </div>




   



  


  )
}

export default Contact