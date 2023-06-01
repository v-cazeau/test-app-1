import { Container, Row, Col } from "react-bootstrap";
import Layout from "../layout/AppLayout.jsx"

export default function About() {
    return (
       <Layout>
        <Container id="about">
            <Row>
                <Col>
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque incidunt autem temporibus, dolore suscipit, qui aperiam delectus ea ad, vero molestias dignissimos. Dicta sint esse natus adipisci ullam eum facilis.</p>
                </Col>
            </Row>
        </Container>
       </Layout>
    );
};