import st from './CountryList.module.css'
import CountryItem from "../CounrtyItem/CountryItem";
import {COUNTRIES} from "./queries";
import {useQuery} from "@apollo/client";
import {useEffect} from "react";

export default function CountryList({setIsCardChosen, setSelectedCard, selectedCard, scrollPosition, setScrollPosition}) {

    useEffect(() => {
        window.scrollTo(0, scrollPosition);
    }, []);

    const { loading, error, data } = useQuery(COUNTRIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <ul className={st.wrapper}>
            {data.countries.map(country=>(
                <CountryItem
                    data-testid="country-item"
                    key={country.code}
                    flag={country.code}
                    country={country.name}
                    capital={country.capital}
                    region={country.continent.name}
                    setIsCardChosen={setIsCardChosen}
                    setSelectedCard={setSelectedCard}
                    selectedCard={selectedCard}
                    setScrollPosition={setScrollPosition}
                />
            ))}
        </ul>
    )
}