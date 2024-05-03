import Container from 'react-bootstrap/Container';
import Link from "next/link";


export default function Home() {
  return (
    <Container>
      <Link href="/progress">Progress</Link>
      <Link href="/home">Home</Link>
    </Container>
  );
}