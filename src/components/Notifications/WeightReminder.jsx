import DataContext from "@/Context/DataContext";
import { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AddWeightModal from "../AddWeightModal";




export function WeightReminder(){
    const {data, dataActions} = useContext(DataContext);
    const [lastMeasurement, setLastMeasurement] = useState({date: null, weight: null});
    const [showModal, setShowModal] = useState(false);

    function handleOnClick(){
        setShowModal(true);
    }

    const showModalCallback = (show) => {
        setShowModal(show);
    }

    useEffect(() => {
        const fetchData = async () => {
        try {
            await  dataActions(
            {type: "consult",
            payload: {
            table : "weight_record"
            }});

            
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            
        }};
        fetchData();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
          const resolvedData = await data;
          if (resolvedData === null) {
            console.log("Data is null");
            return;
          }
      
          if (resolvedData.length > 0) {
            resolvedData.forEach((item, index) => {
                //especifico item.weight porque data puede haber cargado los datos de otra consulta
              if(item.weight && index === resolvedData.length - 1){
                console.log("CORRECT!");
                //solucion temporal. cuando se insertan los datos, se llama este useEffect, pero cuando se llaman,
                //no aparecen con los datos nuevos aun
                setTimeout(setLastMeasurement({date: item.date, weight: item.weight}), 1000);
              }
            });
          } else {
            console.log("WRONG!");
          }
        };
        fetchData();
      }, [data]);

    return(
        <>
            <Container style={{ maxWidth: "900px" }}>
            <Card className=" p-0 " bg={'light'}>
                <Row>
                    <Col>
                        <h1 className="text-center">It's time to weigh yourself</h1>
                    </Col>
                </Row>
                <Row >
                    <Container className="d-flex flex-row">
                        <Container className="p-0">
                        <Row>
                            <Col>
                                <img src="https://fluidosyherramientas.com/670-thickbox_default/bascula-consultorio-analoga.jpg" style={{ maxWidth : "450px"}}/>
                            </Col>
                        </Row>
                            </Container>
                            <Container className="p-5 d-flex flex-column justify-content-around">
                            <Row>
                                <Col>
                                <h2>Last measurement:</h2>  
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <h5>Date: {lastMeasurement.date ? new Date(lastMeasurement.date).toLocaleDateString() : "No data available"}</h5>

                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <h5>Weight: {lastMeasurement.weight ? lastMeasurement.weight : "No data available"} lbs</h5>                
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button onClick={handleOnClick}>Add a New One</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Row>
            </Card>
            </Container>

            <AddWeightModal show={showModal} showModalCallback={showModalCallback}/>
        </>
    )
}