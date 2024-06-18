import { useRef, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import WeightContext from "@/Context/WeightContext";
import AccountContext from "@/Context/AccountContext";

export default function AddWeightModal({show, showModalCallback}) {


    const {accountData} = useContext(AccountContext);
    const {weightDataActions} = useContext(WeightContext);

    const dayRef = useRef(null);
    const weightRef = useRef(null);

    const handleOnClick = async (event) => {

        event.preventDefault(); // Evita el envío del formulario por defecto
  
        const resolvedData = await accountData;

        try {
          await weightDataActions(
            {type: "add", 
            payload : {data: {
                date: dayRef.current.value, 
                weight: weightRef.current.value,
                account_id: resolvedData[0].id
            }}});
              
            //puesto temporalmente con setTimeOut, porque cuando intenta cargar los datos, aun no se han insertado los datos por lo que no aparecen los ultimos resultados
            try {

              setTimeout(() => {
                 weightDataActions(
                  {type: "getData", 
                  payload :{
                    actions: weightDataActions, 
                    account_id: resolvedData[0].id
                  }});

                                console.log("peso enviado");
              },2000);

                  

            } catch (error) {
              console.error("Error al obtener los datos:", error);
            }


        } catch (error) {
          console.error("Error al enviar los datos:", error);
        }
        //falta condicionarlo por si hay algun error
        showModalCallback(false);
    }
    

  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add a new measurement</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-between">
            <div>
                <img src="https://media.doitcenter.com.pa/media/catalog/product/c/t/ctsca11_qqb4ovuxi3c2owbs.jpg?quality=85&fit=bounds&height=&width=1080&auto=webp&format=pjpg" width={"256px"}></img>
            </div>
          <div>
            <br></br>
            <h5>Date:</h5>
          <input type="date" ref={dayRef} placeholder="MM/DD/YYYY"></input>
          <br></br>
            <h5>Weight:</h5>
          <input type="text" ref={weightRef} placeholder="0.00lbs"></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => showModalCallback(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleOnClick}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
