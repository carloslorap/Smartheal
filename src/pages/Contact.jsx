import React, { useState } from 'react';
import contactanos from '../assets/contactanos.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../style/contact.css";
import compartenos from '../assets/img-compartenos.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    dataProtection: false,
    cookiesPolicy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario
    console.log(formData);
    // Puedes enviar los datos a un servidor, mostrar un mensaje, etc.
  };

  return (
    <div className="img-contacto">
      <img src={contactanos} alt="Nuestros Medicos" className="image" />
      <div className="image-info"></div>

      <div className="form-card text-center">
      <div className="form-card text-center">
  <div className="text-contact">
    <div className="message">
      <h1 className="escribenos">Dejanos tu mensaje</h1>
    </div>
    <div className="form-description">
      <label>Llena este formulario y nuestro equipo te responderá a la brevedad</label>
    </div>
  </div>
</div>


        <Form onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <Form.Group controlId="firstName">
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Nombre"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="text-center border-black"
                  
                  style={{ margin: '0 25%', width: '65%', marginBottom: '20px' }}
                />
              </Form.Group>

              <Form.Group controlId="lastName">
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Apellido"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="text-center border-black"
                  style={{ margin: '0 25%', width: '65%', marginBottom: '20px' }}
                />
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  className="text-center border-black"
                  style={{ margin: '0 25%', width: '65%', marginBottom: '20px' }}
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-center border-black"
                  style={{ margin: '0 25%', width: '65%', marginBottom: '90px' }}
                />
              </Form.Group>

              <div className="text-left" style={{ position: 'absolute', right: '1470px', bottom: '-280px' }}>
                (*) Campos Obligatorios
              </div>

              <Form.Group controlId="dataProtection">
                <Form.Check
                  type="checkbox"
                  name="dataProtection"
                  label="He leído y acepto las condiciones establecidas en la clausula de protección de datos personales"
                  checked={formData.dataProtection}
                  onChange={handleChange}
                  style={{ margin: '0 25%', marginBottom: '20px', width: '85%' }}
                  required
                />
              </Form.Group>

              <Form.Group controlId="cookiesPolicy">
                <Form.Check
                  type="checkbox"
                  name="cookiesPolicy"
                  label="He leído y acepto las condiciones establecidas en la política de cookies"
                  checked={formData.cookiesPolicy}
                  onChange={handleChange}
                  style={{ margin: '0 25%', marginBottom: '60px', width: '64%' }}
                  required
                />
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group controlId="message">
                <Form.Control
                  as="textarea"
                  rows={8}
                  name="message"
                  placeholder="Escribe tu mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  className="border-black"
                  style={{ margin: '0 10%', width: '70%', marginBottom: '100px', borderBottomRightRadius: '50px' }}
                />
              </Form.Group>
              <Button variant="outline-success" type="submit" className="ml-3 custom-button"> Enviar</Button>

            </div>

          </div>

        </Form>
  
        </div>
      
        <div className="img-compartenos" style={{ display: 'flex', justifyContent: 'center' }}>
  <img src={compartenos} alt="Nuestros Medicos" className="image" style={{ maxWidth: '60%', maxHeight: '100%', margin: 'auto' }} />
  <div className="image-info"></div>
</div>



    </div>
  );
};

export default Contact;
