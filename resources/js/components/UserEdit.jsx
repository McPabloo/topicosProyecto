import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col, Toast, ToastContainer, Table, Modal, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../../css/colores.css";

export default function UserProfile() {
    
    const navigate = useNavigate();
    const [userId, setUsuarioId] = useState(window.GlobalUsuarioId);
    const [usuario, setUsuario] = useState({});
    const token = localStorage.getItem('token');

    const[formValue, setformValue] = useState({
        email:"",
        address:"",
        phone:"",
        birthday:"",
      });
    
      const onChange=(e)=>{
        e.persist();
        setformValue({...formValue,
        [e.target.name]:e.target.value});
      }

    //se manda llamar solo una vez cuando se monta el componente
    useEffect(() => {
            //console.log(localStorage.getItem("usuarioId"));
            //console.log(token);
            loadUser();
    }, [])

    const loadUser = async () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        };
        const data = new FormData();
        data.append("id", localStorage.getItem("usuarioId"));
        await axios.post("http://127.0.0.1/topicos/public/api/show_usuarios", data, config)
            .then(response => {
                console.log(response.data);
                setUsuario(response.data);
            }).catch(error => {
                console.log(error);
            });
    }

     function cerrarSesion(){
        window.GlobalUsuarioId=null;
        navigate('/topicos/public/Homenl');
     }

     const handleSubmit = async (e) =>{
        if (e && e.preventDefault()) e.preventDefault();
            const formData = new FormData();
            formData.append("id",localStorage.getItem("usuarioId"));
            formData.append("email", formValue.email);
            formData.append("address", formValue.address);
            formData.append("phone", formValue.phone);
            formData.append("birthday", formValue.birthday);
            await axios.post("http://127.0.0.1/topicos/public/api/updateUser", formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                }
            ).then(response => {
              console.log('Actualización Exitosa');
              console.log(response);
              navigate('/topicos/public/Profile');
            }).catch(error=>{
                console.log('Actualización Incorrecta');
            });
        };

    return (
        <Container>
            <br />
            <h1 align="center"> <span className="colorVerde">Perfil del usuario</span></h1>
            <br />
            <Row>
                <Col>
                    <div className="card text-left">
                        <div className="card-header"><h3>
                            {usuario.name}
                        </h3>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title"><b>Información adicional del usuario:</b></h4>
                            <Form onSubmit={handleSubmit}>
                                
                                <Form.Label>Introduce tu nuevo correo electrónico:</Form.Label>
                                <Form.Control type="text" placeholder={usuario.email} value={formValue.email}
                                onChange={onChange} name="email" />
                                <Form.Text className="text-muted">
                                    Recuerda que este debe ser único
                                </Form.Text> <br/>
                                
                                <Form.Label>Número de Teléfono:</Form.Label>
                                <Form.Control type="text" placeholder={usuario.phone} value={formValue.phone}
                                onChange={onChange} name="phone" /> <br/>

                                <Form.Label>Dirección de Residencia:</Form.Label>
                                <Form.Control type="text" placeholder={usuario.address} value={formValue.address}
                                onChange={onChange} name="address" />  <br/>

                                <Form.Label>Fecha de Nacimiento:</Form.Label>
                                <Form.Control type="date" placeholder={usuario.birthday} value={formValue.birthday}
                                onChange={onChange} name="birthday" />  <br/>
                                <br/>
                                <div className="login-button-container">
                                    <Button variant="primary" type="submit">
                                        Actualizar
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

                

    );
}