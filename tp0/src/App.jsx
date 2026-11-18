
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import"./App.css";
import Destinations from "./components/Destinations/Destinations";
import Formulaire from "./components/Exemple/Exemple";
import Reservation from "./components/reservation";
function App() {
  return (
    <div className="app">
    <Header/>
    <main>
      <Destinations/>
      <Formulaire/>
      <Reservation/>
    </main>
    <Footer/>
    </div>
  );
}

export default App;