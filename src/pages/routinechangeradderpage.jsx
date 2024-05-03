import { MyNavbar } from "@/components/MainPage/MyNavbar"
import { Footer } from "@/components/MainPage/Footer"
import {ProgressProvider} from "@/Context/ProgressContext";
import { RoutineDisplay } from "@/components/RoutineDisplay";
import {RoutineChangerAdder} from "@/components/RoutineChangerAdder";



export default function RoutinesChangerAdderPage() {
  
  return (
    <>
      <ProgressProvider>
        <MyNavbar/>
        <RoutineChangerAdder/>
        {/* <Footer/> */}
      </ProgressProvider>

    </>
  );
}