import '../../css/login.css';
import { Form, Button, Container, Modal } from "react-bootstrap";
import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const[formValue, setformValue] = useState({
    email:"",
    password:"",
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
        await axios.post("http://127.0.0.1/topicos/public/api/login", formData,
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
            if (response.status === 200) {
              if(response.data.email.endsWith('@yahoo.com')){
                //window.GlobalTipoUsuario=1;
                //localStorage.setItem("tipoUsuario",1);
                navigate('/topicos/public/Check');
              }
            } 
        }).catch(error=>{
            console.log(error);
            console.log('Incorrecto');
        });
    };

  return (
    <div className="login-container">
            <div className="login-form-container">
                <h2 className="login-heading">Iniciar sesión</h2>
                
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" value={formValue.email}
                  onChange={onChange} name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={formValue.password}
                  onChange={onChange} name="password" />
                  <Form.Text className="text-muted">
                    Nunca compartiremos tu información con nadie más
                  </Form.Text>
                </Form.Group>

                <div className="signup-link-container">
                  ¿No tienes una cuenta?{" "}
                  <Link to="/topicos/public/Check" className="signup-link">
                      Regístrate aquí
                  </Link>
                </div>
                
                <div className="login-button-container">
                  <Button variant="primary" type="submit">
                     Iniciar Sesión
                  </Button>
                </div>
                
              </Form>
            
            </div>
    </div>
    );
}

export default Login;