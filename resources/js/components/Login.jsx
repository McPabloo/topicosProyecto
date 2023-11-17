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

  const handleSubmit = async (e) => {
    try {
      if (e && e.preventDefault()) e.preventDefault();
      const formData = new FormData();
      formData.append("email", formValue.email);
      formData.append("password", formValue.password);
  
      console.log('Entrando a API');
  
      const response = await axios.post(
        "http://127.0.0.1/topicos/public/api/login",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
          }
        }
      );
  
      console.log('Correcto');
      console.log('response:', response.status);
  
      if (response.status === 200) {
        localStorage.setItem("usuarioId", response.data.id);
        localStorage.setItem("token", response.data.token);
  
        console.log(localStorage.getItem("usuarioId"));
  
        if (response.data.email.endsWith('@yahoo.com')) {
          window.GlobalTipoUsuario = 1;
          localStorage.setItem("tipoUsuario", 1);
          navigate('/topicos/public/Homenl');
        }
        if (response.data.email.endsWith('@gmail.com')) {
          window.GlobalTipoUsuario = 2;
          localStorage.setItem("tipoUsuario", 2);
          navigate('/topicos/public/Homenl');
        }
      }
    } catch (error) {
      console.error('Incorrecto ', error.response.status);
      console.error('Mensaje de error:', error.response.data);
    }
  };
  

  /*const handleSubmit = async (e) =>{
    if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("email", formValue.email);
        formData.append("password", formValue.password);

        console.log('Entrando a API');

        await axios.post("http://127.0.0.1/topicos/public/api/login", formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
          console.log('Correcto');
            console.log('response:', response.status);
            
            
            if (response.status === 200) { 
              localStorage.setItem("usuarioId",response.data.id);
              localStorage.setItem("token",response.data.token);
              //compruebo el id del usuario con el que estoy logeado
              console.log(localStorage.getItem("usuarioId"));
              //console.log(localStorage.getItem("token"));
              
              if(response.data.email.endsWith('@yahoo.com')){
                window.GlobalTipoUsuario=1;
                //indica que el usuario está logeado como cliente
                localStorage.setItem("tipoUsuario",1);
                navigate('/topicos/public/Homenl');
              }
              if(response.data.email.endsWith('@gmail.com')){
                window.GlobalTipoUsuario=2;
                //indica que el usuario está logeado como administrador
                localStorage.setItem("tipoUsuario",2);
                navigate('/topicos/public/Homenl');
              }
            } 
        }).catch(response=>{
            console.error('Incorrecto ', response );
        });
    };*/

    /*
    const handleSubmit = async (e) => {
      try {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("email", formValue.email);
        formData.append("password", formValue.password);
        
        console.log('Entrando a API');

        const response = await axios.post(
          "http://127.0.0.1/topicos/public/api/login",
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Accept': 'application/json'
            }
          }
        );
    
        console.log('respuesta de la API:');
        console.log(response.status);
    
        if (response.status === 200) {
          localStorage.setItem("usuarioId", response.data.id);
          localStorage.setItem("token", response.data.token);
    
          console.log(localStorage.getItem("usuarioId"));
          //console.log(localStorage.getItem("token"));
    
          if (response.data.email.endsWith('@yahoo.com')) {
            window.GlobalTipoUsuario = 1;
            localStorage.setItem("tipoUsuario", 1);
            navigate('/topicos/public/Homenl');
          }
          if (response.data.email.endsWith('@gmail.com')) {
            window.GlobalTipoUsuario = 2;
            localStorage.setItem("tipoUsuario", 2);
            navigate('/topicos/public/Homenl');
          }
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        console.log('Incorrecto');
      }
    };*/
    

  return (
    <div className="login-container">
            <div className="login-form-container">
                <h2 className="login-heading">Iniciar sesión</h2>
                
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control type="email" value={formValue.email}
                  onChange={onChange} name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={formValue.password}
                  onChange={onChange} name="password" />
                  <Form.Text className="text-muted">
                    Tu contraseña debe ser ultra secreta
                  </Form.Text>
                </Form.Group>

                <div className="signup-link-container">
                  ¿No tienes una cuenta?{" "}
                  <Link to="/topicos/public/Registro" className="signup-link">
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