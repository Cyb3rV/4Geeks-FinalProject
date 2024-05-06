// import { Card, Col, Container, Row } from "react-bootstrap";
// import { RoutineDisplay } from "./RoutineDisplay";
// import { useState } from "react";
// import RoutineLibraryItem from "./RoutineLibraryItem";

// const initState = {
//     exercise : ["planchas", "abdominales", "dominadas", "dominadas", "dominadas", "dominadas"]
// }


// export default function RoutineLibrary(){
//     const [exercises, setExercises] = useState(initState);


//     return(
//         <>
//             <Container className="d-flex my-5">
//                 {exercises["exercise"].map((exercise, index) => (
//                     <RoutineLibraryItem key={index} data={exercise}/>             
//                 )
//                 )}
//             </Container>
            
//         </>
//     )
// }

import { Card, Col, Container, Row } from "react-bootstrap";
import { RoutineDisplay } from "./RoutineDisplay";
import { useEffect, useState } from "react";
import RoutineLibraryItem from "./RoutineLibraryItem";
import { AddExercise, GetExercises } from "@/dataCRUD";
import AddExerciseModal from "./MainPage/AddExerciseModal";


export default function RoutineLibrary(){
    const [exercises, setExercises] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [exerciseInModal, setExerciseInModal] = useState(null);

    const AddNewExercise = (day, exercise, repetitions) => {
        setShowModal(false);
        AddExercise(day, exercise, repetitions).then(() => {
            GetExercises().then((data) => {
                setExercises(data);
            });
        });
    }

    const showModalCallback = (exercise) => {
        setExerciseInModal(exercise);
        setShowModal(true);
    }

    useEffect(() => {
        GetExercises().then((data) => {
            setExercises(data);
        })
    }, []);

    return(
        <>
            <Container className="d-flex my-5">
                {exercises.map((exercise, index) => (
                    <RoutineLibraryItem key={index} data={exercise} showModalCallback={showModalCallback}/>             
                )
                )}
            </Container>
            <AddExerciseModal show={showModal} exercise={exerciseInModal} AddExerciseCallback={AddNewExercise} showModalCallback={setShowModal}/>
        </>
    )
}