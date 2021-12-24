import './App.css';
import Header from "./components/Header/Header";
import ChooseCard from "./components/ChooseCard/ChooseCard";
import CountryList from "./components/CountryList/CountryList";

function App() {
  return (
    <div className="App">
        <Header />
        <ChooseCard />
        <CountryList />
    </div>
  );
}

export default App;
