import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col, Toast, ToastContainer, Table, Modal, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import "../../css/colores.css";

export default function UserProfile() {
    const navigate = useNavigate();
    const [userId, setUsuarioId] = useState(window.GlobalUsuarioId);
    const [usuario, setUsuario] = useState({});

    //se manda llamar solo una vez cuando se monta el componente
    useEffect(() => {
            console.log(localStorage.getItem("usuarioId"));
            loadUser();
    }, [])

    const loadUser = async () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
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

    return (
        <Container>
            <br /> <br /> <br />
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
                            <p className="card-text"><b>E-mail: </b> {usuario.email}</p>
                            <p className="card-text"><b>Contraseña: </b> {usuario.status}</p>
                            <Button variant="danger" onClick={cerrarSesion} >Cerrar Sesión</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}