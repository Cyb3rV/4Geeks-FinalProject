// import { Container, Col, Row, Card } from "react-bootstrap"
// import RoutineDisplayItem from "./RoutineDisplayItem"
// import { useState } from "react"
// import { BsThreeDotsVertical } from "react-icons/bs";

// const initState = {
//     exercise : ["planchas", "abdominales", "dominadas", "dominadas", "dominadas", "dominadas"],
//     repetitions: ["4X10" , "4X15" , "4X10", "4X10", "4X10", "4X10"]
// }

// export function RoutineDisplay(){
//     const [exercises, setExercises] = useState(initState);



//     return(
//         <>
//             <Container >
//                 <Card>
//                     <Row className="d-flex justify-content-between">
//                         <Col xs={11}>
//                             <h1>Monday</h1>
//                         </Col>
//                         <Col xs={1}>
//                             <BsThreeDotsVertical />
//                         </Col>
//                     </Row>
//                     <Row className="d-flex">
//                         {exercises["exercise"].map((exercise, index) =>  
//                         (
//                             <Col>
//                                 <RoutineDisplayItem key={index} index={index} data={exercises}/>
//                             </Col>
//                         )
//                         )}
//                     </Row>
//                 </Card>
//             </Container>
//         </>
//     )
// }

import { Container, Col, Row, Card } from "react-bootstrap"
import RoutineDisplayItem from "./RoutineDisplayItem"
import { useEffect, useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import { GetRoutine, RemoveExercise } from "@/dataCRUD";

export function RoutineDisplay({ day, deletable }){
    const [routine, setRoutine] = useState(null);

    useEffect(() => {
        GetRoutine(day).then((data) => {
            setRoutine(data);
        })
    }, [day]);

    const removeExercise = (index) => {
        RemoveExercise(day, index).then(() => {
            GetRoutine(day).then((data) => {
                setRoutine(data);
            })
        });
    }

    return(
        <>
            <Container >
                <Card>
                    <Row className="d-flex justify-content-between">
                        <Col xs={11}>
                            <h1>{day}</h1>
                        </Col>
                        <Col xs={1}>
                            <Link href={`/routineedit?day=${day}`}>
                                <BsThreeDotsVertical />
                            </Link>
                        </Col>
                    </Row>
                    {routine && <Row className="d-flex">
                        {routine.exercises.map((exercise, index) =>  
                        (
                            <Col key={index}>
                                <RoutineDisplayItem key={index} index={index} exercise={exercise} repetitions={routine.repetitions[index]} deletable={deletable} removeExerciseCallback={removeExercise}/>
                            </Col>
                        )
                        )}
                    </Row>}
                </Card>
            </Container>
        </>
    )
}