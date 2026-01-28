import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Branches from "./pages/OurBranches";
import TheJourney from "./pages/TheJourney";
import Footer from "./components/Footer";
import Partners from "./pages/Partners";
// import second from "./assets/journey5.jfif";
// import contactImg from "./assets/journey1.jfif"; 


function App() {
  return (
    <>

        <Home>
                <Navbar/>
              </Home>

        <Partners/>
        <AboutUs/>
        <TheJourney/>
        <Branches/>   
        <ContactUs/>
        <Footer/>

    </>
  );
}

export default App;
