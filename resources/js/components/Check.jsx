import { React, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../css/homeProducts.css";

export default function IndexProducts() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    const config = {
      headers: { 'Authorization': 'Bearer ' + token },
      params: { user_id: localStorage.getItem("usuarioId") }
    };
    const res = await axios.get('http://127.0.0.1/topicos/public/api/cargarCarritos', config);
    setListProduct(res.data)
  }

  return (
    <>
      <Col style={{ textAlign: 'center' }}>
        <h1><b>Nuestros productos</b></h1>
      </Col>
      <Col style={{ justifyContent: 'center' }}>
        <Row className="justify-content-md-center">
          <br></br>
          <br></br>
          {
            listProduct.map((auto) => 
            {
              return (
                <Col key={auto.id} className="cardProduct" style={{ maxHeight: "350px", minHeight: "250px", height: "300px", minWidth: "270px", maxWidth: "280px" }} 
                onClick={() => {
                  console.log(auto.id);
                  navigate('/topicos/public/ProductCard',{state:{autoID:auto.id}});
                }}>
                  <br></br>
                  <div className="img" >
                  <Row>
                    
                    <img
                      src={auto.image}
                      //imagen alternativa cuando no carga la imagen
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://www.evoximages.com/wp-content/uploads/2021/09/Forcolorspin2.gif";
                      }}
                      title={auto.model}
                      alt={auto.model + ". " + auto.year}
                      width="100%"
                      height="90%"
                      style={{ maxHeight: "220px",minHeight:"180px" }}
                    />
                  </Row>
                  <br></br>
                  <Row>
                    <h3 >{auto.model}</h3>
                    <h6 >{"$" + auto.price + " mxn"}</h6>
                  </Row>
                  <br></br>
                  <br></br>
                  </div>
                </Col>
              )
            }
            )
          }
        </Row>
      </Col>
    </>
  );
}