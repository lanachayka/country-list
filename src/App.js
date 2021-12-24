import './App.css';
import Header from "./components/Header/Header";
import ChooseCard from "./components/ChooseCard/ChooseCard";
import CountryList from "./components/CountryList/CountryList";
import {useState} from "react";
import {useMediaQuery} from "react-responsive";
import CountryDetails from "./components/CounrtyDetails/CountryDetails";

function App() {
  const [isCardChosen, setIsCardChosen] = useState(false);
  const isBigScreen = useMediaQuery({ query: '(min-width: 780px)' });

  return (
    <div className="App">
        <Header isCardChosen={isCardChosen} setIsCardChosen={setIsCardChosen}/>
        {isBigScreen && isCardChosen
        ? (<><ChooseCard isCardChosen={isCardChosen}/>
            <CountryList setIsCardChosen={setIsCardChosen}/>
            <CountryDetails/></>)
        : !isBigScreen && isCardChosen
        ? (<><ChooseCard isCardChosen={isCardChosen}/>
            <CountryDetails/></>)
        : (<><ChooseCard isCardChosen={isCardChosen}/>
            <CountryList setIsCardChosen={setIsCardChosen}/>
            </>)}
    </div>
  );
}

export default App;
