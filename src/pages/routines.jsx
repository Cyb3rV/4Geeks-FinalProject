import { MyNavbar } from "@/components/MainPage/MyNavbar"
import { Footer } from "@/components/MainPage/Footer"
import {ProgressProvider} from "@/Context/ProgressContext";



export default function Routines() {
  
  return (
    <>
      <ProgressProvider>
        <MyNavbar/>
        {/* <Footer/> */}
      </ProgressProvider>

    </>
  );
}