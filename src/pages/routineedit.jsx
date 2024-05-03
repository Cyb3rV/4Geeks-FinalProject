import { MyNavbar } from "@/components/MainPage/MyNavbar"
import { Footer } from "@/components/MainPage/Footer"
import {ProgressProvider} from "@/Context/ProgressContext";
import { RoutineDisplay } from "@/components/RoutineDisplay";
import RoutineChanger from "@/components/RoutineChanger";



export default function Routines() {
  
  return (
    <>
      <ProgressProvider>
        <MyNavbar/>
        <RoutineChanger/>
        {/* <Footer/> */}
      </ProgressProvider>

    </>
  );
}