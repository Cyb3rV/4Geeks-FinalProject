import { MyNavbar } from "@/components/MainPage/MyNavbar"
import { Footer } from "@/components/MainPage/Footer"
import {ProfileProvider} from "@/Context/ProfileContext";
import { RoutineDisplay } from "@/components/RoutineDisplay";
import {RoutineChangerAdder} from "@/components/RoutineChangerAdder";



export default function RoutinesChangerAdderPage() {
  
  return (
    <>
      <ProfileProvider>
        <MyNavbar/>
        <RoutineChangerAdder/>
        {/* <Footer/> */}
      </ProfileProvider>

    </>
  );
}