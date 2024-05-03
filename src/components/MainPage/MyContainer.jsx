import { Jumbotron } from "./Jumbotron";
import { SingleCard } from "./SingleCard";
import {Container, Row, Col} from "react-bootstrap"

export function MyContainer () {
    return (
    <>
    <Container className="my-5 p-1" fluid="md">     
        <Row className="m-0 px-2"> 
          <Jumbotron />
        </Row>
        {/* xs={12} sm={3} */}
        {/*  align-items-center */}
        <Row className="mt-5 mx-0 gy-5 g-sm-5 gx-xl-4 d-flex justify-content-center">
        {/* d-flex justify-content-center */}
          <Col sm={6} xl={3}>
            <SingleCard />
          </Col>
          <Col sm={6} xl={3}>
            <SingleCard />
          </Col>
          <Col sm={6} xl={3}>
            <SingleCard />
          </Col>
          <Col sm={6} xl={3}>
            <SingleCard />
          </Col>
          <Col sm={6} xl={3}>
            <SingleCard />
          </Col>
          <Col sm={6} xl={3}>
            <SingleCard />
          </Col>
          <Col sm={6} xl={3}>
            <SingleCard />
          </Col>
          <Col sm={6} xl={3}>
            <SingleCard />
          </Col>
        </Row>
        
      </Container>
    </>
    )
}