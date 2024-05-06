import { Container, Col, Row, Card } from "react-bootstrap"
import RoutineDisplayItem from "./RoutineDisplayItem"
import { useEffect, useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import { GetRoutine, RemoveExercise } from "@/dataCRUD";

export function RoutineDisplay({ day, deletable }){
    const [routine, setRoutine] = useState(null);

    useEffect(() => {
        GetRoutine(day).then((data) => {
            setRoutine(data);
        })
    }, [day]);

    const removeExercise = (index) => {
        RemoveExercise(day, index).then(() => {
            GetRoutine(day).then((data) => {
                setRoutine(data);
            })
        });
    }

    return(
        <>
            <Container >
                <Card>
                    <Row className="d-flex justify-content-between">
                        <Col xs={11}>
                            <h1>{day}</h1>
                        </Col>
                        <Col xs={1}>
                            <Link href={`/routineedit?day=${day}`}>
                                <BsThreeDotsVertical />
                            </Link>
                        </Col>
                    </Row>
                    {routine && <Row className="d-flex">
                        {routine.exercises.map((exercise, index) =>  
                        (
                            <Col key={index}>
                                <RoutineDisplayItem key={index} index={index} exercise={exercise} repetitions={routine.repetitions[index]} deletable={deletable} removeExerciseCallback={removeExercise}/>
                            </Col>
                        )
                        )}
                    </Row>}
                </Card>
            </Container>
        </>
    )
}