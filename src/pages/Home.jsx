import { Container, Row, Col } from "react-bootstrap";
import Layout from "../layout/AppLayout.jsx"

export default function Home() {
    return (
       <Layout>
        <Container> 
            <Row>
                <Col> 
                <h1>Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim dolorem earum harum labore placeat impedit et perspiciatis est natus alias sit voluptas commodi, cum doloremque eveniet beatae quos incidunt!</p>
                </Col>
            </Row>
        </Container>
       </Layout>
    );
};