import { DataProvider } from "@/Context/DataContext";
import { ProfileProvider } from "@/Context/ProfileContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <ProfileProvider>
        <Component {...pageProps} />;
      </ProfileProvider>
    </DataProvider>
  )
}
