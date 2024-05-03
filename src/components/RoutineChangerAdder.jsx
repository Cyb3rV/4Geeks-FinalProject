import { Container, Col, Row, Card, Form, Button } from "react-bootstrap"
import RoutineDisplayItem from "./RoutineDisplayItem"
import { useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs";

const initState = {
    exercise : ["planchas", "abdominales", "dominadas", "dominadas", "dominadas", "dominadas"],
    repetitions: ["4X10" , "4X15" , "4X10", "4X10", "4X10", "4X10"]
}

export function RoutineChangerAdder(){
    const [exercises, setExercises] = useState(initState);



    return(
        <>
            <Container >
                <Card>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <img src="https://s.cafebazaar.ir/images/icons/com.workout.fitness.exercise.loseweight.gymworkout-02dab361-d1ae-4fd0-be8d-ad108b93e49b_512x512.png?x-img=v1/format,type_webp,lossless_false/resize,h_256,w_256,lossless_false/optimize" width={"128px"}></img>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="text-center">
                            <h5>Pull up</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Form>
                            <Form.Group as={Col}>
                                <Form.Label>Sessions</Form.Label>
                                <Form.Select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Repetitions</Form.Label>
                                <Form.Select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row className="my-5">
                        <Col>
                            <Button>Cancel</Button>
                        </Col>
                        <Col>
                            <Button>Add</Button>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}