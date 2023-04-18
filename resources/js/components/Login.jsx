import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import axios from "axios";

function Login() {

  const[formValue, setformValue] = useState({
    email:"",
    password:""
  })

  const onChange=(e)=>{
    e.persist();
    setformValue({...formValue,
    [e.target.name]:e.target.value});
  }

  const handleSubmit = (e) =>{
    if (e && e.preventDefault())e.preventDefault();
    const formData=new FormData();
    formData.append("email",formValue.email)
    formData.append("password",formValue.password)
        axios.post("https://localhost:8080/topicos/public/api/login",
        formData,
        {headers:{'Content-Type':'multipart/form-data',
        'Acecept':'application/json'}}
        ).then(Response=>{
            console.log('response:');
            console.log(response);
        }).catch(error=>{
            console.log(error);

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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;