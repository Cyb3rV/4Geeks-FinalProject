import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Link from "next/link";

function LogInForm() {
  return (
    <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <Container className="h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col xs={12} md={9} lg={7} xl={6}>
            <Card style={{ borderRadius: '15px' }}>
              <Card.Body className="p-5">
                <h2 className="text-uppercase text-center mb-5">Log In</h2>
                <Form>
                  <Form.Group className="mb-4">
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                    <Button variant="success" size="lg" block>Log In</Button>
                  </div>
                  <p className="text-center text-muted mt-3 mb-0">Don't have an account? <Link href="registration" className="fw-bold text-body"><u>Sign Up here</u></Link></p>
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

export default LogInForm;
