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
  //con estos actualizo datos del auto
  const [desc, setDesc] = useState(['']);
  const [precio, setPrecio] = useState(['']);
  

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

  const[formValues, setformValues] = useState({
    modelc:"",
    yearc:"",
    brandc:"",
    categoryc:"",
    imagec:"",
    descriptionc:"",
    stockc:"",
    pricec:"",
  });

  const[formUpdate, setformUpdate] = useState({
    desc:"",
    precio:"",
  });

  const onChangeCreate=(e)=>{
    e.persist();
    setformValues({...formValues,
    [e.target.name]:e.target.value});
  }

  const onChangeUpdate=(e)=>{
    e.persist();
    setformUpdate({...formUpdate,
    [e.target.name]:e.target.value});
  }

  const autoUpdate = async () => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };
    const data = new FormData();
    data.append("model", selectedAuto);
    data.append("price", formUpdate.precio);
    data.append("description", formUpdate.desc);
    await axios.post("http://127.0.0.1/topicos/public/api/updateAuto", data, config)
        .then(response => {
            setShowModalUpdate(false);
            getProduct();
        }).catch(error => {
            console.log(error);
        });
  }

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

  const ingresarCompra = async () => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };
    const data = new FormData();
    data.append("model", formValues.modelc);
    data.append("stock", formValues.stockc);
    data.append("year", formValues.yearc);
    data.append("description", formValues.descriptionc);
    data.append("brand", formValues.brandc);
    data.append("category", formValues.categoryc);
    data.append("image", formValues.imagec);
    data.append("price", formValues.pricec);
    await axios.post("http://127.0.0.1/topicos/public/api/addAuto", data, config)
        .then(response => {
            setShowModalCreate(false);
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
                        <Button variant="info" onClick={() => {setShowModalUpdate(true), setSelectedAuto(auto.model);}}>
                            Editar
                        </Button>
                       {/*<Button variant="danger">
                            Eliminar
                        </Button>*/} 
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
                    <Form.Label>Precio</Form.Label>
                    <FormControl name="precio" value={formUpdate.precio} onChange={onChangeUpdate} type="number"/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Precio</Form.Label>
                    <FormControl name="desc" value={formUpdate.desc} onChange={onChangeUpdate} type="text"/>
                </Form.Group>

                <Form.Text>
                Realizar esta acción modificarálos datos actuales en la base de datos
                </Form.Text>

                <br/><br/>

                <Button variant="primary" onClick={autoUpdate}>
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
                    <FormControl name="modelc" value={formValues.modelc} onChange={onChangeCreate} type="text"  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Unidades a añadir</Form.Label>
                    <FormControl name="stockc" value={formValues.stockc} onChange={onChangeCreate} type="text"  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Precio</Form.Label>
                    <FormControl name="pricec" value={formValues.pricec} onChange={onChangeCreate} type="text"  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Descripción</Form.Label>
                    <FormControl name="descriptionc" value={formValues.descriptionc} onChange={onChangeCreate} type="text"  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Marca</Form.Label>
                    <FormControl name="brandc" value={formValues.brandc} onChange={onChangeCreate} type="text"  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Categoría</Form.Label>
                    <FormControl name="categoryc" value={formValues.categoryc} onChange={onChangeCreate} type="text"  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Año</Form.Label>
                    <FormControl name="yearc" value={formValues.yearc} onChange={onChangeCreate} type="year" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Imagen</Form.Label>
                    <FormControl name="imagec" value={formValues.imagec} onChange={onChangeCreate} type="text"  />
                </Form.Group>

                <br/>

                <Button variant="primary" onClick={ingresarCompra}>
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
