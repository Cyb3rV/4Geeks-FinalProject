import { Card, Col, Container, Row } from "react-bootstrap";
import { RoutineDisplay } from "./RoutineDisplay";
import RoutineLibrary from "./RoutineLibrary";
import { useRouter } from "next/router";

export default function RoutineChanger(){

    const router = useRouter();
    const {day} = router.query;

    return(
        <>
            <Container>
                <RoutineDisplay deletable={true} day={day}/>    
                <RoutineLibrary/>
            </Container>
            
        </>
    )
}