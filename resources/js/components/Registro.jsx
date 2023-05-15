import '../../css/login.css';
import { Form, Button, Container, Modal } from "react-bootstrap";
import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Registro() {

  const [showModal, setShowModal] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  function handleRegistrationSuccess() {
    setRegistrationSuccess(true);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  const navigate = useNavigate();

  const[formValue, setformValue] = useState({
    email:"",
    password:"",
    c_password:"",
    name:"",
    address:"",
    phone:"",
    birthday:"",
  });

  const onChange=(e)=>{
    e.persist();
    setformValue({...formValue,
    [e.target.name]:e.target.value});
  }

  const handleSubmit = async (e) =>{
    if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("email", formValue.email);
        formData.append("password", formValue.password);
        formData.append("c_password", formValue.c_password);
        formData.append("name", formValue.name);
        formData.append("address", formValue.address);
        formData.append("birthday", formValue.birthday);
        formData.append("phone", formValue.phone);
        await axios.post("http://127.0.0.1/topicos/public/api/register", formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
          console.log('Correcto');
            console.log('response:');
            console.log(response);
            handleRegistrationSuccess();
        }).catch(error=>{
            console.log(error);
            console.log('Incorrecto');
        });
    };

  return (
    <div className="login-container">
            <div className="login-form-container">
                <h2 className="login-heading">Formulario de Registro</h2>
                
                <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nombre Completo</Form.Label>
                  <Form.Control type="text" value={formValue.name}
                  onChange={onChange} name="name" placeholder="Enter your full name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control type="email" value={formValue.email}
                  onChange={onChange} name="email" placeholder="Enter email: @yahoo.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Dirección de Residencia</Form.Label>
                  <Form.Control type="text" value={formValue.address}
                  onChange={onChange} name="address" placeholder="Avenida RDJ 402" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Fecha de Nacimiento</Form.Label>
                  <Form.Control type="date" value={formValue.birthday}
                  onChange={onChange} name="birthday" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control type="number" value={formValue.phone}
                  onChange={onChange} name="phone" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña ultra secreta</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={formValue.password}
                  onChange={onChange} name="password" />
                  <Form.Text className="text-muted">
                    Nunca compartiremos tu información con nadie más
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirma tu contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={formValue.c_password}
                  onChange={onChange} name="c_password" />
                  <Form.Text className="text-muted">
                    Confirma tu contraseña
                  </Form.Text>
                </Form.Group>
                
                <div className="login-button-container">
                  <Button variant="primary" type="submit">
                     Registrarme!
                  </Button>
                </div>
                
              </Form>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Registro Exitoso!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Tu registro se llevó a cabo de manera correcta. Bienvenido!</p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleCloseModal}>Cerrar</button>
          </Modal.Footer>
        </Modal>
            
            </div>
    </div>
    );
}

export default Registro;