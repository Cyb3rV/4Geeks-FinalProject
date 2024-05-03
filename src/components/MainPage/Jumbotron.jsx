import { Button, Col, Container, Row } from "react-bootstrap";

export function Jumbotron() {
    
    return (
        <Container className="bg-body-secondary p-3 p-sm-3 p-xl-5">
        <Row>
            <Col>
                <h1 className="display-3">A Warm Welcome</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                <p className="fs-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia iste adipisci quidem, debitis quo commodi blanditiis recusandae molestiae, reiciendis doloribus qui provident officia culpa similique rem. Quos quidem eos vitae.</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button variant = "primary" className="fs-5">Call To Action!</Button>
            </Col>
        </Row>

        </Container>
    );
}
    