import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewCollection from "./components/NewCollection";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <NewCollection/>
    </div>
  );
}

export default App;
