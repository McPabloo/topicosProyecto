import React, { useContext, useEffect, useState } from 'react';
import { Container, Button, Row, Col, Toast, ToastContainer } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import "../../css/colores.css";

export default function ProductCard() {
    const navigate = useNavigate();
    const location = useLocation();
    //si no hay nada en el estado de location toma el valor 2
    const [productoId, setProdutoId] = useState(location?.state?.autoID ?? 1);
    const [producto, setProducto] = useState({});

    const loadProduct = async () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const data = new FormData();
        data.append("id", productoId);
        await axios.post("http://127.0.0.1/topicos/public/api/get_producto", data, config)
            .then(response => {
                console.log(response.data.model);
                setProducto(response.data);
            }).catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        loadProduct()
        console.log(localStorage.getItem("usuarioId"));
        console.log(location.state.autoID);
    }, [])


    const [showToastC, setShowToastC] = useState(false);
    const toastCloseC = () => setShowToastC(false);
    const toastShowC = () => {
        if (window.GlobalUsuarioId === null)
            navigate('/topicos/public/Login');

        if (window.GlobalTipoUsuario == 1) {
            storeListProduct();
            setShowToastC(true);
        }


    }
    const [position, setPosition] = useState('bottom-center');


    const storeListProduct = async () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const data = new FormData();
        data.append("usuario_id", window.GlobalUsuarioId);
        data.append("carrito_id", window.GlobalUsuarioId);
        data.append("cantidad", 1);
        data.append("producto_id", productoId);
        await axios.post("http://127.0.0.1/topicos/public/api/store_lista_carritos", data, config)
            .then(response => {
                console.log("añadido correctamente");
            }).catch(error => {
                console.log(error);
            });
    }

    return (

        <Container >
            <br></br>
            {
                (location.state.autoID === null) ? <h1>No encontrado</h1>
                    :

                    <>
                        <h1 className='colorVerde' style={{ fontSize: 24 + "pt", textAlign: "center" }}><b>{producto.model}</b></h1><br /><br /><br /><Row style={{ textAlign: "left" }}>
                            <Col md="6">
                                <h4 className='colorVerde'>Características</h4>
                                <br></br>
                                <h5> <span className='colorNegro'>Precio: </span> <span className='colorMorado'> ${producto.price} MXN</span>  </h5>
                                <h5><span className='colorNegro'>Precio con IVA:</span> <span className='colorMorado'> ${producto.price * 1.16} MXN</span></h5>
                                <h5 style={{ textAlign: "justify" }} className='colorNegroB'>{producto.description}</h5>
                                <Row>
                                    <Col>
                                        <h5 className='colorNegro'> Categoría: {producto.category}</h5>
                                        <h5 className='colorNegro'>   Año: {producto.year} </h5>
                                        <h5 className='colorNegro'> Marca: {producto.brand}</h5>
                                    </Col>
                                </Row>
                            </Col>

                            <Col>
                                <Row>
                                    <br /> <br />  <br /> <br />
                                    <img
                                        alt={producto.model} //imagen alternativa cuando no carga la imagen
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null; // prevents looping
                                            currentTarget.src = "https://www.evoximages.com/wp-content/uploads/2021/09/Forcolorspin2.gif";
                                        }}
                                        title={producto.model}
                                        src={producto.image}
                                        width={550}>
                                    </img>
                                </Row>
                                <br></br>
                                <Row>
                                    <Button disabled={producto.stock <= 0} onClick={toastShowC}>{producto.stock <= 0 ? "No disponible" : "Añadir al carrito"}</Button>
                                </Row>
                            </Col>
                        </Row>
                        
                        <ToastContainer className="p-3" position={position}>
                            <Toast show={showToastC} onClose={toastCloseC}>
                                <Toast.Header>
                                    <strong className="me-auto">Añadir al carrito</strong>
                                </Toast.Header>
                                <Toast.Body>Se añadió correctamente tu producto al carrito.</Toast.Body>
                            </Toast>
                        </ToastContainer>
                    </>
            }
        </Container>
    );
}