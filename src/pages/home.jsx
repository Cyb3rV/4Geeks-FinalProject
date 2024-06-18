import { MyContainer } from "@/components/MainPage/MyContainer";
import { MyNavbar } from "@/components/MainPage/MyNavbar"
import { Footer } from "@/components/MainPage/Footer"
import { WeightReminder } from "@/components/Notifications/WeightReminder";
import { useContext, useEffect } from "react";
import ProfileContext from "@/Context/ProfileContext";
import RoutineContext from "@/Context/RoutineContext";
import WeightContext from "@/Context/WeightContext";



export default function HomePage() {
  // const {LoadDataRoutine} = useContext(RoutineContext);
  // const {LoadDataWeight} = useContext(WeightContext);

  // useEffect(() =>{
  //   LoadDataRoutine();
  //   LoadDataWeight();
  // },[])


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