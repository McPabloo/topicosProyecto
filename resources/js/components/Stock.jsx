import { React, useEffect, useState } from 'react';
import { Modal, Form, FormControl } from "react-bootstrap";
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import "../../css/colores.css";
import { useNavigate,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//idea para reproducir sonido: modal que pregunte si desea permitir sonido en la pagina

export default function IndexProduct() {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  //con estos 2 mando el valor de model y stock al modal
  const [selectedAuto, setSelectedAuto] = useState(['']);
  const [stockAuto, setStockAuto] = useState(['']);
  //con este recibo la cantidad a comprar del modal
  const [cantidad, setCantidad] = useState(['']);
  //con este recibo los elementos para crear nuevo producto del modal
  const [modelc, setModelc] = useState(['']);
  const [yearc, setYearc] = useState(['']);
  const [descriptionc, setDescriptionc] = useState(['']);
  const [brandc, setBrandc] = useState(['']);
  const [stockc, setStockc] = useState(['']);
  const [pricec, setPricec] = useState(['']);
  const [categoryc, setCategoryc] = useState(['']);
  const [imagec, setImagec] = useState(['']);
  

  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = async () => {
    const res = await axios.get('http://127.0.0.1/topicos/public/api/index_productos')
    setListProduct(res.data)
  }

  const onChangeCantidad = (event) => {
    setCantidad(event.target.value);
  };

  const onChangeCreate = (event) => {
    setModelc(event.target.value);
    setYearc(event.target.value);
    setBrandc(event.target.value);
    setDescriptionc(event.target.value);
    setCategoryc(event.target.value);
    setImagec(event.target.value);
  };

  const realizarCompra = async () => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };
    const data = new FormData();
    data.append("model", selectedAuto);
    data.append("stock", cantidad);
    await axios.post("http://127.0.0.1/topicos/public/api/compraAuto", data, config)
        .then(response => {
            setShowModal(false);
            getProduct();
        }).catch(error => {
            console.log(error);
        });
  }

  const [showModal, setShowModal] = useState(false);

  const [showModalUpdate, setShowModalUpdate] = useState(false);

  const [showModalCreate, setShowModalCreate] = useState(false);

  return (
    <Container fluid="true" >
       <br /> <br />
            <Row>
                <Col><h2>Inventario </h2></Col>
                <Col>
                  <Button variant="dark" style={{float: 'right'}} onClick={() => {setShowModalCreate(true);}}>
                            Realizar Compras
                  </Button>
                </Col>
            </Row>
                <br />
      <Row>
        <div class="col-md-12">
          <table class="table table-bordered table-hover" >
          <thead>
            <tr>
              <th >Id</th>
              <th >Modelo</th>
              <th >Stock</th>
              <th >Precio</th>
              <th class="m">Marca</th>
              <th class="m">Año</th>
            </tr>
            </thead>
            <tbody>
            {
            listProduct.map((auto) => 
                <tr className={auto.stock < 10 ? (
                    'resaltado'
                  ) : auto.stock < 19 ? (
                    'Noresaltado'
                  ) : (
                    'full'
                  )} key={"uci" + auto.id}>
                    <td className="n">{auto.id}</td>
                    <td className="n">{auto.model}</td>
                    <td className="n">{auto.stock}</td>
                    <td className="n">{"$" + auto.price}</td>
                    <td className="n">{auto.brand}</td>
                    <td className="n">{auto.year}</td>
                    <td>
                        <Button variant="success" onClick={() => {setShowModal(true), setSelectedAuto(auto.model)
                        , setStockAuto(auto.stock);}}>
                            Ingresar
                        </Button>
                        <Button variant="info" onClick={() => {setShowModalUpdate(true), setSelectedAuto(auto.model)
                        , setStockAuto(auto.stock);}}>
                            Editar
                        </Button>
                        <Button variant="danger">
                            Eliminar
                        </Button>
                    </td>
                </tr>
              )
            }
            </tbody>
          </table>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Realizar Compras</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h2>{selectedAuto}</h2>
            <h4>Cantidad en Stock: {stockAuto}</h4>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Unidades a Añadir</Form.Label>
                    <FormControl name="cantidad" value={cantidad} onChange={onChangeCantidad} type="text" placeholder="10" />
                </Form.Group>
                <Form.Text>
                Se recomienda mantener un total de 20 unidades en stock
                </Form.Text>

                <br/><br/>

                <Button variant="primary" onClick={realizarCompra}>
                    Agregar
                </Button>

                </Form>
            </Modal.Body>
        </Modal>

        <Modal show={showModalUpdate} onHide={() => setShowModalUpdate(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modificar Detalles del Auto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h2>{selectedAuto}</h2>
            <h4>Cantidad en Stock: {stockAuto}</h4>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Unidades a añadir</Form.Label>
                    <FormControl name="cantidad" value={cantidad} onChange={onChangeCantidad} type="text" placeholder="10" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Precio</Form.Label>
                    <FormControl name="cantidad" value={cantidad} onChange={onChangeCantidad} type="text" placeholder="10" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Descripción</Form.Label>
                    <FormControl name="cantidad" value={cantidad} onChange={onChangeCantidad} type="text" placeholder="10" />
                </Form.Group>
                <Form.Text>
                Se recomienda mantener un total de 20 unidades en stock
                </Form.Text>

                <br/><br/>

                <Button variant="primary">
                    Actualizar
                </Button>

                </Form>
            </Modal.Body>
        </Modal>

        <Modal show={showModalCreate} onHide={() => setShowModalCreate(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Añadir Automóvil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Modelo del Auto</Form.Label>
                    <FormControl name="modeloc" value={modelc} onChange={onChangeCreate} type="text" placeholder="10" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Unidades a añadir</Form.Label>
                    <FormControl name="stockc" value={stockc} onChange={onChangeCreate} type="text" placeholder="10" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Precio</Form.Label>
                    <FormControl name="pricec" value={pricec} onChange={onChangeCreate} type="text" placeholder="10" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Descripción</Form.Label>
                    <FormControl name="descriptionc" value={descriptionc} onChange={onChangeCreate} type="text" placeholder="10" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Marca</Form.Label>
                    <FormControl name="brandc" value={brandc} onChange={onChangeCreate} type="text" placeholder="10" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Categoría</Form.Label>
                    <FormControl name="categoryc" value={categoryc} onChange={onChangeCreate} type="text" placeholder="10" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Año</Form.Label>
                    <FormControl name="yearc" value={yearc} onChange={onChangeCreate} type="number" placeholder="10" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Imagen</Form.Label>
                    <FormControl name="imagec" value={imagec} onChange={onChangeCreate} type="text" placeholder="10" />
                </Form.Group>

                <br/>

                <Button variant="primary">
                    Aceptar
                </Button>

                </Form>
            </Modal.Body>
        </Modal>

        </div>
      </Row>
    </Container>
  );
}
