import { Card, Col, Container, Row } from "react-bootstrap";
import { RoutineDisplay } from "./RoutineDisplay";
import RoutineLibrary from "./RoutineLibrary";

export default function RoutineChanger(){

    return(
        <>
            <Container>
                <RoutineDisplay/>    
                <RoutineLibrary/>
            </Container>
            
        </>
    )
}