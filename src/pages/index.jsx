import Container from 'react-bootstrap/Container';
import Link from "next/link";
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Home() {

  const router = useRouter();
  
  
  useEffect(()=>{
    router.push('/login');
  },[])

  // return (
  //   <Container>
  //     <Link href="/progress">Progress</Link>
  //     <Link href="/home">Home</Link>
  //     <Link href="/login">Login</Link>
  //     <Link href="/registration">Registration</Link>
  //     <Link href="/routines">Routines</Link>
  //   </Container>
  // );
}
