import './App.css';
import Header from "./components/Header/Header";
import ChooseCard from "./components/ChooseCard/ChooseCard";
import CountryList from "./components/CountryList/CountryList";
import {useState} from "react";
import {useMediaQuery} from "react-responsive";
import CountryDetails from "./components/CounrtyDetails/CountryDetails";

function App() {
  const [isCardChosen, setIsCardChosen] = useState(false);
  const [selectedCard, setSelectedCard] =  useState('');
  const isBigScreen = useMediaQuery({ query: '(min-width: 780px)' });

  const showCountryList = () => {
    if(!isBigScreen && isCardChosen) {
      return (<></>)
    } else return <CountryList setIsCardChosen={setIsCardChosen} setSelectedCard={setSelectedCard}/>
  }

  return (
    <div className="App">
        <Header isCardChosen={isCardChosen} setIsCardChosen={setIsCardChosen}/>
        <ChooseCard isCardChosen={isCardChosen} selectedCard={selectedCard}/>
        {showCountryList()}
        {!isBigScreen && isCardChosen && <CountryDetails selectedCard={selectedCard}/>}
    </div>
  );
}

export default App;
