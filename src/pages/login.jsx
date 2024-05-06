import { DataProvider } from "@/components/DataContext";
import LogInForm from "@/components/LogInForm"



export default function LogIn() {
  
  return (
    <>
      <DataProvider>
        <LogInForm/>
      </DataProvider>

    </>
  );
}