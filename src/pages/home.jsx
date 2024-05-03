import { MyContainer } from "@/components/MainPage/MyContainer";
import { MyNavbar } from "@/components/MainPage/MyNavbar"
import { Footer } from "@/components/MainPage/Footer"
import {ProgressProvider} from "@/Context/ProgressContext";



export default function HomePage() {
  return (
    <>
      <ProgressProvider>
        <MyNavbar/>
        <MyContainer/>
        <Footer/>
      </ProgressProvider>
    </>
  );
}