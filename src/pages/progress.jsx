import { MyNavbar } from "@/components/MainPage/MyNavbar"
import { Footer } from "@/components/MainPage/Footer"
import { Profile } from "@/components/ProgressPage/Profile";
import {ProgressProvider} from "@/Context/ProgressContext";



export default function Progress() {
  return (
    <>
      <ProgressProvider>
        <MyNavbar/>
        <Profile/>
        {/* <Footer/> */}
      </ProgressProvider>
    </>
  );
}