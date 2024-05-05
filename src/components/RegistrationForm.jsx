import React, { useContext, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Link from "next/link";
import DataContext from "@/components/DataContext";


function RegistrationForm () {
  const {data, dataActions} = useContext(DataContext);

  const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    try {
      // Envía los datos al contexto
      await dataActions(
      {type: "add", 
      payload: {table: "account_list", 
      data:{user : userRef.current.value,
        password: passwordRef.current.value, 
        email: emailRef.current.value
      }}});
      
      // Vaciar los campos de entrada
      // userRef.current.value = "";
      // emailRef.current.value = "";
      // passwordRef.current.value = "";

    } catch (error) {
      console.error("Error al enviar los datos:", error);
      // Manejar el error aquí
    }
}

  useEffect(() => {
    console.log(data.error);
    // if(!data.error){
    //   userRef.current.value = "";
    //   emailRef.current.value = "";
    //   passwordRef.current.value = "";
    // }
  },[data]);




  
  return (
    <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <Container className="h-100">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col xs={12} md={9} lg={7} xl={6}>
              <Card style={{ borderRadius: '15px' }}>
                <Card.Body className="p-5">
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                      <Form.Control type="text" placeholder="Your Name" required ref={userRef}/>
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Control type="email" placeholder="Your Email" required ref={emailRef}/>
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Control type="password" placeholder="Password" required ref={passwordRef}/>
                    </Form.Group>
                    {/* <Form.Group className="mb-4">
                      <Form.Control type="password" placeholder="Repeat your password" required />
                    </Form.Group> */}
                    {/* <Form.Group className="mb-5">
                      <Form.Check type="checkbox" label={<span>I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a></span>} />
                    </Form.Group> */}
                    <div className="d-flex justify-content-center">
                      <Button type="submit" variant="success gradient-custom-4" size="lg">Register</Button>
                    </div>
                    <p className="text-center mt-5 mb-0">Have already an account? <Link href="/login" className="fw-bold text-body">Login here</Link></p>
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
