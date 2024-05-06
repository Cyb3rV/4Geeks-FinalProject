// import { MyNavbar } from "@/components/MainPage/MyNavbar"
// import { Footer } from "@/components/MainPage/Footer"
// import {ProgressProvider} from "@/Context/ProgressContext";
// import { RoutineDisplay } from "@/components/RoutineDisplay";



// export default function Routines() {
  
//   return (
//     <>
//       <ProgressProvider>
//         <MyNavbar/>
//         <RoutineDisplay/>
//         <RoutineDisplay/>
//         <RoutineDisplay/>
//         {/* <Footer/> */}
//       </ProgressProvider>

//     </>
//   );
// }

import { MyNavbar } from "@/components/MainPage/MyNavbar"
import { Footer } from "@/components/MainPage/Footer"
import {ProgressProvider} from "@/Context/ProgressContext";
import { RoutineDisplay } from "@/components/RoutineDisplay";



export default function Routines() {
  
  return (
    <>
      <ProgressProvider>
        <MyNavbar/>
        <RoutineDisplay deletable={false} day={"Monday"}/>
        <RoutineDisplay deletable={false} day={"Tuesday"}/>
        <RoutineDisplay deletable={false} day={"Wednesday"}/>
        <RoutineDisplay deletable={false} day={"Thursday"}/>
        <RoutineDisplay deletable={false} day={"Friday"}/>
        {/* <Footer/> */}
      </ProgressProvider>

    </>
  );
}