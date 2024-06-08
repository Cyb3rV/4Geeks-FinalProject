import ProfileContext from "@/Context/ProfileContext";
import { useContext, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";




export function Profile(){
    const {profileData} = useContext(ProfileContext);

    useEffect(()=>{
      console.log(profileData);
    },[])
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
                  {/* <h2>Name: {profileData.name}</h2>   */}
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Email: {profileData.email}</h5> 
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>User Name: {profileData.userName}</h5> 
                </Col>
              </Row>
              {/* <Row>
                <Col>
                  <h5>Weight: {profileData.weight}</h5>                
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Height: {profileData.height}</h5>               
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Age: {profileData.age}</h5>             
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Time: {profileData.timeWorkingOut} month</h5>  
                </Col>
              </Row> */}
            </Container>
          </Card>
        </Container>
        
    )
}