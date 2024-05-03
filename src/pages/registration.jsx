import { MyNavbar } from "@/components/MainPage/MyNavbar"
import { Footer } from "@/components/MainPage/Footer"
import { Profile } from "@/components/ProgressPage/Profile";
import {ProgressProvider} from "@/Context/ProgressContext";
import { WeightChart } from "@/components/WeightChart";
import RegistrationForm from "@/components/RegistrationForm"



export default function Registration() {
  
  return (
    <>
      <ProgressProvider>
        <RegistrationForm/>
      </ProgressProvider>

    </>
  );
}