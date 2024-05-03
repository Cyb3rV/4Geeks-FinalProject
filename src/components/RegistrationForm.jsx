import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Link from "next/link";

function RegistrationForm () {
  return (
    <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <Container className="h-100">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col xs={12} md={9} lg={7} xl={6}>
              <Card style={{ borderRadius: '15px' }}>
                <Card.Body className="p-5">
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                  <Form>
                    <Form.Group className="mb-4">
                      <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Control type="email" placeholder="Your Email" />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Control type="password" placeholder="Repeat your password" />
                    </Form.Group>
                    <Form.Group className="mb-5">
                      <Form.Check type="checkbox" label={<span>I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a></span>} />
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                      <Button variant="success gradient-custom-4" size="lg" block>Register</Button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link href="/login" className="fw-bold text-body">Login here</Link></p>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default RegistrationForm;
