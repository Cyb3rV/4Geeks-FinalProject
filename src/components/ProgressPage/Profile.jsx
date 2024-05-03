import ProgressContext from "@/Context/ProgressContext";
import { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";




export function Profile(){
    const {data, dataActions} = useContext(ProgressContext);


    return(
        <Container style={{ maxWidth: "900px" }}>
          <Card className="d-flex flex-row p-0 " bg={'light'}>
            <Container className="p-0">
              <Row>
                <Col>
                    <img src="https://img.freepik.com/free-photo/bodybuilder-posing-studio-isolated-grey-background_613910-10921.jpg?size=626&ext=jpg"/>
                </Col>
              </Row>
            </Container>
            <Container className="p-5 d-flex flex-column justify-content-around">
              <Row>
                <Col>
                  <h2>Name: {data.name}</h2>  
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Nick: {data.nick}</h5> 
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>User Name: {data.userName}</h5> 
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Weight: {data.weight}</h5>                
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Height: {data.height}</h5>               
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Age: {data.age}</h5>             
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Time: {data.timeWorkingOut} month</h5>  
                </Col>
              </Row>
            </Container>
          </Card>
        </Container>
        
    )
}