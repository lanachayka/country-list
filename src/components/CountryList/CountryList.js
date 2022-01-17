import st from './CountryList.module.css'
import CountryItem from "../CounrtyItem/CountryItem";
import {COUNTRIES} from "./queries";
import {useLazyQuery} from "@apollo/client";

export default function CountryList({setIsCardChosen, setSelectedCard, selectedCard, scrollPosition, setScrollPosition}) {

    const [loadCountries, { called, error, loading, data }] = useLazyQuery(COUNTRIES);

    if (called && loading) return <p>Loading...</p>;
    if(error) return <p>Error :(</p>
    if (!called) {
        return loadCountries();
    }

    window.scrollTo(0, scrollPosition);

    return (
        <ul className={st.wrapper}>
            {data.countries.map(country=>(
                <CountryItem
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