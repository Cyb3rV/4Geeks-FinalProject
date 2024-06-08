import { MyNavbar } from "@/components/MainPage/MyNavbar"
import { Footer } from "@/components/MainPage/Footer"
import { Profile } from "@/components/ProgressPage/Profile";
import { WeightChart } from "@/components/WeightChart";

export default function Progress() {
  
  return (
    <>
          <MyNavbar/>
          <Profile/>
          <WeightChart />
          {/* <Footer/> */}
    </>
  );
}