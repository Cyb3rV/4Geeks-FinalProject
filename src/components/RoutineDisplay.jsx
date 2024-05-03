import { Container, Col, Row, Card } from "react-bootstrap"
import RoutineDisplayItem from "./RoutineDisplayItem"
import { useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs";

const initState = {
    exercise : ["planchas", "abdominales", "dominadas", "dominadas", "dominadas", "dominadas"],
    repetitions: ["4X10" , "4X15" , "4X10", "4X10", "4X10", "4X10"]
}

export function RoutineDisplay(){
    const [exercises, setExercises] = useState(initState);



    return(
        <>
            <Container >
                <Card>
                    <Row className="d-flex justify-content-between">
                        <Col xs={11}>
                            <h1>Monday</h1>
                        </Col>
                        <Col xs={1}>
                            <BsThreeDotsVertical />
                        </Col>
                    </Row>
                    <Row className="d-flex">
                        {exercises["exercise"].map((exercise, index) =>  
                        (
                            <Col>
                                <RoutineDisplayItem key={index} index={index} data={exercises}/>
                            </Col>
                        )
                        )}
                    </Row>
                </Card>
            </Container>
        </>
    )
}