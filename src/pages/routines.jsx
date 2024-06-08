import { MyNavbar } from "@/components/MainPage/MyNavbar"
import { Footer } from "@/components/MainPage/Footer"
import {ProfileProvider} from "@/Context/ProfileContext";
import { RoutineDisplay } from "@/components/RoutineDisplay";



export default function Routines() {
  
  return (
    <>
        <MyNavbar/>
        <RoutineDisplay deletable={false} day={"Monday"}/>
        <RoutineDisplay deletable={false} day={"Tuesday"}/>
        <RoutineDisplay deletable={false} day={"Wednesday"}/>
        <RoutineDisplay deletable={false} day={"Thursday"}/>
        <RoutineDisplay deletable={false} day={"Friday"}/>
        {/* <Footer/> */}
    </>
  );
}