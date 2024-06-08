import { MyContainer } from "@/components/MainPage/MyContainer";
import { MyNavbar } from "@/components/MainPage/MyNavbar"
import { Footer } from "@/components/MainPage/Footer"
import {DataProvider} from "@/Context/DataContext";
import { WeightReminder } from "@/components/Notifications/WeightReminder";



export default function HomePage() {
  return (
    <>
        <MyNavbar/>
        <WeightReminder/>
        {/* <MyContainer/> */}
{/* 
        <Footer/> */}
    </>
  );
}