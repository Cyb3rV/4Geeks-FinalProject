import { DataProvider } from "@/components/DataContext";
import RegistrationForm from "@/components/RegistrationForm"




export default function Registration() {
  
  return (
    <>
      <DataProvider>
        <RegistrationForm/>
      </DataProvider>

    </>
  );
}