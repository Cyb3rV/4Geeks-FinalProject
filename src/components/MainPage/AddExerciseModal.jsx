import { useRef } from "react";
import { Button, Modal } from "react-bootstrap";

export default function AddExerciseModal({show, exercise, AddExerciseCallback, showModalCallback}) {

    const dayRef = useRef(null);
    const repetitionsRef = useRef(null);

    const submit = () => {
        if (!dayRef.current.value || !repetitionsRef.current.value) {
            return;
        }
        AddExerciseCallback(dayRef.current.value, exercise, repetitionsRef.current.value);
    }

  return (
    <>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Add Exercise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{exercise}</h5>
          <img src="https://s.cafebazaar.ir/images/icons/com.workout.fitness.exercise.loseweight.gymworkout-02dab361-d1ae-4fd0-be8d-ad108b93e49b_512x512.png?x-img=v1/format,type_webp,lossless_false/resize,h_256,w_256,lossless_false/optimize" width={"128px"}></img>
            <br></br>
          <input type="text" ref={dayRef} placeholder="Day"></input>
          <input type="text" ref={repetitionsRef} placeholder="Repetitions"></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => showModalCallback(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={submit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
