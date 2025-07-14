import "aos/dist/aos.css";
import { AboutUs } from "./components/AboutUs";
import { Banner } from "./components/Banner";
import { BusinessPartner } from "./components/BusinessPartner";
import { CustomFooter } from "./components/CustomFooter";
import { CustomHeader } from "./components/CustomHeader";
import { Values } from "./components/Values";

function App() {
  return (
    <main className=" min-h-screen">
      <CustomHeader />
      <Banner />
      <BusinessPartner />
      <Values />
      <AboutUs />
      <CustomFooter />
    </main>
  );
}

export default App;
