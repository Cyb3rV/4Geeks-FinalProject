import React, { useContext, useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import Link from "next/link";
import { useRouter } from 'next/router';
import AccountContext from '@/Context/AccountContext';
import ProfileContext from '@/Context/ProfileContext';
import RoutineContext from '@/Context/RoutineContext';
import WeightContext from '@/Context/WeightContext';


function LogInForm() {
  const router = useRouter();

  const {accountData, accountDataActions} = useContext(AccountContext); 
  const {LoadDataProfile} = useContext(ProfileContext);
  const {LoadDataRoutine} = useContext(RoutineContext);
  const {LoadDataWeight} = useContext(WeightContext);

  const [loginError, setLoginError] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  

const handleSubmit = async (event) => {
  event.preventDefault(); // Evita el envío del formulario por defecto

  try {
    // Envía los datos al contexto
    await accountDataActions(
    {type: "getData", 
    payload: {password: passwordRef.current.value, email: emailRef.current.value}
    });


  } catch (error) {
    console.error("Error al enviar los datos:", error);
    
  }
}


useEffect(() => {
  const fetchData = async () => {
    const resolvedData = await accountData;
    if (resolvedData === null) {
      console.log("Data is null");
      return;
    }

    else{
      //lo puse en la posicion 0 porque devuelve un array aunque sea un solo elemento. No deberia haber dobles porque en la BD no se pueden repetir email
      if(resolvedData.length > 0 && 
        resolvedData[0].email === emailRef.current.value && 
        resolvedData[0].password === passwordRef.current.value){
          
        console.log("Logged Succesfully");
        
        LoadDataProfile();
        LoadDataRoutine();
        LoadDataWeight();

        router.push('/home');
      
      }
        
      else {
        console.log("There was an error when you tried to log in");
        setLoginError(true);
      }

    };
  }
  console.log("ejecutando desde accountData" , accountData);
  fetchData();
}, [accountData]);


useEffect(() => {

}, [loginError]);
  
  
  return (
    <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <Container className="h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col xs={12} md={9} lg={7} xl={6}>
            <Card style={{ borderRadius: '15px' }}>
              <Card.Body className="p-5">
                <h2 className="text-uppercase text-center mb-5">Log In</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Control type="email" placeholder="Your Email" required ref={emailRef}/>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control type="password" placeholder="Password" required ref={passwordRef}/>
                  </Form.Group>
                  <div className="d-flex justify-content-center">         
                    <Button type="submit" variant="success" size="lg" >Log In</Button>
                  </div>
                  {loginError && <Alert variant="danger" className="mt-3">Email or password is wrong. Please try again.</Alert>}
                  <p className="text-center text-muted mt-3 mb-0">Don't have an account? <Link href="/registration" className="fw-bold text-body"><u>Sign Up here</u></Link></p>
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
