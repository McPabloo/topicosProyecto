import { Container } from 'react-bootstrap';
import Carrusel from "./Carrousel";
import Footer from "./Footer";
import HomeProducts from "./NLProducts";

export default function Homenl() {
    return (
        <Container fluid="true">
                <Carrusel></Carrusel>
            <div>
                <br></br>
            </div>
            <HomeProducts />
            <div>
                <br></br>
            </div>
            <Footer></Footer>
        </Container>
    );
}