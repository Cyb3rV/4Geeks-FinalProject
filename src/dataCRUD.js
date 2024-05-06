import { exercises, routines } from './mockdata';

async function GetExercises() {
    return exercises;
}

async function GetRoutines() {
    return routines;
}

async function GetRoutine(day) {
    return routines.find(routine => routine.day === day);
}

async function RemoveExercise(day, index) {
    const routine = routines.find(routine => routine.day === day);
    routine.exercises.splice(index, 1);
    routine.repetitions.splice(index, 1);
    alert("El metodo de eliminar ejercicio se llama y la UI se intenta updatear, solo que al no estar en una DB, no se persiste el cambio.")
}

async function AddExercise(day, exercise, repetitions) {
    const newRoutine = { day, exercise, repetitions };
    routines.push(newRoutine);
    alert(`El metodo de agregar ejercicio se llama y la UI se intenta updatear, solo que al no estar en una DB, no se persiste el cambio.\n${JSON.stringify(newRoutine)}`)
}

export {
    GetExercises,
    GetRoutines,
    GetRoutine,
    RemoveExercise,
    AddExercise,
}
