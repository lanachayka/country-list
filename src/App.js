import './App.css';
import Header from "./components/Header/Header";
import ChooseCard from "./components/ChooseCard/ChooseCard";
import CountryList from "./components/CountryList/CountryList";
import {useState} from "react";
import {useMediaQuery} from "react-responsive";
import CountryDetails from "./components/CounrtyDetails/CountryDetails";
import Container from "./components/Container/Container";

function App() {
  const [isCardChosen, setIsCardChosen] = useState(false);
  const [selectedCard, setSelectedCard] =  useState('');
  const isBigScreen = useMediaQuery({ query: '(min-width: 780px)' });

  const showCountryList = () => {
    if(!isBigScreen && isCardChosen) {
      return (<></>)
    } else return <CountryList setIsCardChosen={setIsCardChosen}
                               setSelectedCard={setSelectedCard}
                               selectedCard={selectedCard}
    />
  }

  const showChooseCard = () => {
    if(isBigScreen && isCardChosen) {
      return (<></>)
    } else return <ChooseCard isCardChosen={isCardChosen} selectedCard={selectedCard}/>
  }

  return (
    <div className="App">
        <Header isCardChosen={isCardChosen} setIsCardChosen={setIsCardChosen}/>
        {showChooseCard()}
        {showCountryList()}
        {!isBigScreen && isCardChosen && <CountryDetails selectedCard={selectedCard}/>}
        {isBigScreen && isCardChosen && <Container />}
    </div>
  );
}

export default App;
