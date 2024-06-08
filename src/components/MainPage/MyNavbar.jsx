import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { useRouter } from 'next/router';

export function MyNavbar() {
  const router = useRouter();

  return (

    <Navbar bg="dark" expand="sm" data-bs-theme="dark" className="sticky-top">
    <Container>
    <Navbar.Brand href="#home">Gym SA</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
    <Nav className="ms-auto">
        <Nav.Link onClick={() => router.push('/home')}>Home</Nav.Link>
        <Nav.Link onClick={() => router.push('/progress')}>Progress</Nav.Link>
        <Nav.Link onClick={() => router.push('/routines')}>Routines</Nav.Link>
        <Nav.Link onClick={() => router.push('/contact')}>Feeding</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    
  )
}