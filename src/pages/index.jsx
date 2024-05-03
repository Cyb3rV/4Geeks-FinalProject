import Container from 'react-bootstrap/Container';
import Link from "next/link";


export default function Home() {
  return (
    <Container>
      <Link href="/progress">Progress</Link>
      <Link href="/home">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/registration">Registration</Link>
      <Link href="/routines">Routines</Link>
    </Container>
  );
}