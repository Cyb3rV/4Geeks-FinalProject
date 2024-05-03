import { Card, Col, Container, Row } from "react-bootstrap";
import { RoutineDisplay } from "./RoutineDisplay";
import { useState } from "react";
import RoutineLibraryItem from "./RoutineLibraryItem";

const initState = {
    exercise : ["planchas", "abdominales", "dominadas", "dominadas", "dominadas", "dominadas"]
}


export default function RoutineLibrary(){
    const [exercises, setExercises] = useState(initState);


    return(
        <>
            <Container className="d-flex my-5">
                {exercises["exercise"].map((exercise, index) => (
                    <RoutineLibraryItem key={index} data={exercise}/>             
                )
                )}
            </Container>
            
        </>
    )
}