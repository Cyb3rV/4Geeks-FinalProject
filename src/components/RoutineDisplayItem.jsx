import { Card, Col, Row } from "react-bootstrap";

export default function RoutineDisplayItem({index, exercise, repetitions, deletable, removeExerciseCallback}){

    return(
        <>
            <Card>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <img src="https://pic.onlinewebfonts.com/thumbnails/icons_530689.svg" width={"128px"}></img>
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