import './App.css';
import Header from "../Header/Header";
import ChooseCard from "../ChooseCard/ChooseCard";
import CountryList from "../CountryList/CountryList";
import React, {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import CountryDetails from "../CounrtyDetails/CountryDetails";
import Container from "../Container/Container";
import {showContainer, showCountryList} from "./helper";
import {showChooseCard} from "./helper";
import {showCountryDetails} from "./helper";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isCardChosen, setIsCardChosen] = React.useState(false);
  const [selectedCard, setSelectedCard] =  React.useState('');
  const isBigScreen = useMediaQuery({ query: '(min-width: 780px)' });

  return (
    <div data-testid="app-component">
        <Header isCardChosen={isCardChosen} setIsCardChosen={setIsCardChosen}/>
        <div className="Main">
          {showChooseCard(isBigScreen, isCardChosen, <ChooseCard isCardChosen={isCardChosen} />)}
          {showCountryList(isBigScreen, isCardChosen, <CountryList selectedCard={selectedCard} setSelectedCard={setSelectedCard} setIsCardChosen={setIsCardChosen} scrollPosition={scrollPosition} setScrollPosition={setScrollPosition}/>)}
          {showCountryDetails(isBigScreen, isCardChosen, <CountryDetails selectedCard={selectedCard}/>)}
          {showContainer(isBigScreen, isCardChosen, <Container selectedCard={selectedCard}/>)}
        </div>
    </div>
  );
}

export default App;
