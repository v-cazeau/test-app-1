import { Container, Row, Col } from "react-bootstrap";
import Gallery from "../layout/Gallery"
import Layout from "../layout/AppLayout.jsx"

export default function Portfolio() {
    return (
        <Layout>
            <Container id="gallery">
                <Row>
                    <Col className="text-center"> 
                        <h2>Porfolio</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md="{7}">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse qui libero voluptas tenetur, iste deserunt dicta commodi. Earum molestiae reiciendis rerum illo quaerat aspernatur facere fugit mollitia sunt accusamus.</p>
                    </Col>
                </Row>
            </Container>
            <Gallery />
        </Layout>
    );
};