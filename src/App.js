import './App.css';
import Header from "./components/Header/Header";
import ChooseCard from "./components/ChooseCard/ChooseCard";
import CountryList from "./components/CountryList/CountryList";
import {useState} from "react";

function App() {
  const [isCardChosen, setIsCardChosen] = useState(false);
  return (
    <div className="App">
        <Header isCardChosen={isCardChosen}/>
        <ChooseCard isCardChosen={isCardChosen}/>
        <CountryList />
    </div>
  );
}

export default App;
