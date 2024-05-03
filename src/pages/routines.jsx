import { MyNavbar } from "@/components/MainPage/MyNavbar"
import { Footer } from "@/components/MainPage/Footer"
import {ProgressProvider} from "@/Context/ProgressContext";
import { RoutineDisplay } from "@/components/RoutineDisplay";



export default function Routines() {
  
  return (
    <>
      <ProgressProvider>
        <MyNavbar/>
        <RoutineDisplay/>
        <RoutineDisplay/>
        <RoutineDisplay/>
        {/* <Footer/> */}
      </ProgressProvider>

    </>
  );
}