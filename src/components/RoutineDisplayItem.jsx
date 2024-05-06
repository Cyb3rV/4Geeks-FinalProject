import { Card, Col, Row } from "react-bootstrap";

export default function RoutineDisplayItem({index, exercise, repetitions, deletable, removeExerciseCallback}){

    return(
        <>
            <Card>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <img src="https://s.cafebazaar.ir/images/icons/com.workout.fitness.exercise.loseweight.gymworkout-02dab361-d1ae-4fd0-be8d-ad108b93e49b_512x512.png?x-img=v1/format,type_webp,lossless_false/resize,h_256,w_256,lossless_false/optimize" width={"128px"}></img>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <h5>{exercise}</h5>
                        <h5>{repetitions}</h5>
                        {deletable && <button onClick={() => removeExerciseCallback(index)}>Remove</button>}
                    </Col>
                </Row>
            </Card>
        </>
    )
}