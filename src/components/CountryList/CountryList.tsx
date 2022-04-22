import st from './CountryList.module.css'
import CountryItem from "../CounrtyItem/CountryItem";
import { COUNTRIES } from "./queries";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Search from "../Search/Search";
import { filterCountries, SearchBy } from "./helper";
import { CountriesQueryData } from "./types"

type CountryListProps = {
    setIsCardChosen: (isCardChosen: boolean) => void,
    setSelectedCard: (selectedCard: string) => void,
    selectedCard: string,
    scrollPosition: number,
    setScrollPosition: (scrollPosition: number) => void
}

const CountryList: React.FC<CountryListProps> = ({ setIsCardChosen, setSelectedCard, selectedCard, scrollPosition, setScrollPosition }) => {

    const [searchFilter, setSearchFilter] = useState<string>('');
    const [searchBy, setSearchBy] = useState<SearchBy>('name');

    useEffect(() => {
        window.scrollTo(0, scrollPosition);
    }, [scrollPosition]);

    const { loading, error, data } = useQuery<CountriesQueryData>(COUNTRIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>

    // Implementation with useLazyQuery
    //const [loadCountries, { called, error, loading, data }] = useLazyQuery(COUNTRIES);

    //if (called && loading) return <p>Loading...</p>;
    //if(error) return <p>Error :(</p>
    //if (!called) {
    //    return loadCountries();
    //}

    //window.scrollTo(0, scrollPosition);
    if (data) {
        return (<div className={st.main}>
            <Search setSearchFilter={setSearchFilter} setSearchBy={setSearchBy} />
            <ul className={st.wrapper}>
                {filterCountries(data.countries, searchBy, searchFilter)
                    .map(country => (
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
    } return <></>

}

export default CountryList;