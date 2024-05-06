import { Card, Col, Row } from "react-bootstrap";

export default function RoutineLibraryItem({data, showModalCallback}){

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
                        <h5>{data}</h5>
                        <button onClick={() => showModalCallback(data)}>Add</button>
                    </Col>
                </Row>
            </Card>
        </>
    )
}