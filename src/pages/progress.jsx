import { MyNavbar } from "@/components/MainPage/MyNavbar"
import { Footer } from "@/components/MainPage/Footer"
import { Profile } from "@/components/ProgressPage/Profile";
import {DataProvider} from "@/Context/DataContext";
import { WeightChart } from "@/components/WeightChart";



export default function Progress() {
  
  return (
    <>
      <DataProvider>
        <MyNavbar/>
        <Profile/>
        <WeightChart />
        {/* <Footer/> */}
      </DataProvider>

    </>
  );
}