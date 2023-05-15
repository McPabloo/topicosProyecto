import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Carrusel() {
    return (
        <Carousel fade style={{maxHeight:"600px",minHeight:"320px"}}>
            <Carousel.Item interval={1000}>
                <div className="col text-center" style={{maxHeight:"500px" ,minHeight:"250px"}}>
                    <img
                        className="img shadow-4 d-block w-100"
                        src="http://www.diamondpearlz.com/wp-content/uploads/2015/12/banner-1.jpg"
                        alt="First slide"
                        title="Carousel1"
                    />
                </div>
                <Carousel.Caption>
                    <h3 style={{ textAlign: "center", backgroundColor: "rgba(255,255,255, .2)", backdropFilter: "blur(10px)" }}>VENTA</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <div className="col text-center" style={{maxHeight:"500px",minHeight:"250px"}} >
                    <img
                        className="img shadow-4 d-block w-100"
                        src="https://www.carrepairadelaidesa.com.au/wp-content/uploads/2021/10/Car-Engine-Repair-Replacement-Banner.png"
                        alt="Second slide"
                        title="Carousel2"
                    />
                </div>
                <Carousel.Caption>
                    <h3 style={{ textAlign: "center", backgroundColor: "rgba(255,255,255, .2)", backdropFilter: "blur(10px)" }} >MANTENIMIENTO</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000} style={{maxHeight:"500px",minHeight:"320px"}}>
                <div className="col text-center" >
                    <img
                        className="img shadow-4 d-block w-100"
                        src="https://la-pajarita.es/wp-content/uploads/productos-sostenibles-para-hosteleria-ecofriendly-lapajarita-mapelor.jpg"
                        alt="Third slide"
                        title="Carousel2"
                    />
                </div>
            </Carousel.Item>

        </Carousel>
    );
}
