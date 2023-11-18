import "./App.css";
import Hero from "./components/Hero";
import MarketplaceBanner from "./components/MarketplaceBanner";
import NewCollection from "./components/NewCollection";
import TopCollection from "./components/TopCollection";
import VirtualWorld from "./components/VirtualWorld";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black ">
      <Hero />
      <NewCollection />
      <MarketplaceBanner />
      <VirtualWorld />

      <TopCollection />
      <Footer/>
    </div>
  );
}

export default App;
