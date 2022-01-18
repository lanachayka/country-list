import st from './CountryList.module.css'
import CountryItem from "../CounrtyItem/CountryItem";
import {COUNTRIES} from "./queries";
import {useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import Search from "../Search/Search";

export default function CountryList({setIsCardChosen, setSelectedCard, selectedCard, scrollPosition, setScrollPosition}) {

    const [searchFilter, setSearchFilter] = useState('');

    useEffect(() => {
        window.scrollTo(0, scrollPosition);
    }, [scrollPosition]);

    const {loading, error, data} = useQuery(COUNTRIES);

    if (loading) return <p>Loading...</p>;
    if(error) return <p>Error :(</p>

    // Implementation with useLazyQuery
    //const [loadCountries, { called, error, loading, data }] = useLazyQuery(COUNTRIES);

    //if (called && loading) return <p>Loading...</p>;
    //if(error) return <p>Error :(</p>
    //if (!called) {
    //    return loadCountries();
    //}

    //window.scrollTo(0, scrollPosition);

    return (<div className={st.main}>
            <Search setSearchFilter={setSearchFilter}/>
            <ul className={st.wrapper}>
                {data.countries
                    .filter(country=>country.name.includes(searchFilter))
                    .map(country=>(
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
        </div>
    )
}