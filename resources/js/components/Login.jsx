import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

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
        }).catch(error=>{
            console.log(error);
            console.log('Incorrecto');
        });
    };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={formValue.email}
        onChange={onChange} name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={formValue.password}
        onChange={onChange} name="password" />
      </Form.Group>

      <div className="signup-link-container">
        ¿No tienes una cuenta?{" "}
        <Link to="/electricarNE2/public/Register" className="signup-link">
            Regístrate aquí
        </Link>
      </div>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;