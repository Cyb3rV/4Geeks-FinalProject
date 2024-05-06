import { MyNavbar } from "@/components/MainPage/MyNavbar"
import { Footer } from "@/components/MainPage/Footer"
import {ProfileProvider} from "@/Context/ProfileContext";
import { RoutineDisplay } from "@/components/RoutineDisplay";
import RoutineChanger from "@/components/RoutineChanger";



export default function Routines() {
  
  return (
    <>
      <ProfileProvider>
        <MyNavbar/>
        <RoutineChanger/>
        {/* <Footer/> */}
      </ProfileProvider>

    </>
  );
}