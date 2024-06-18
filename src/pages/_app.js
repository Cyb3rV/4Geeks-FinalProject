import { AccountProvider } from "@/Context/AccountContext";
import { ProfileProvider } from "@/Context/ProfileContext";
import { RoutineProvider } from "@/Context/RoutineContext";
import { WeightProvider } from "@/Context/WeightContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AccountProvider>
      <ProfileProvider>
        <RoutineProvider>
          <WeightProvider>
          <Component {...pageProps} />;
          </WeightProvider>
        </RoutineProvider>
      </ProfileProvider>
    </AccountProvider>
  )
}
