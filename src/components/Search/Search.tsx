import { SearchBy } from '../CountryList/helper';
import st from './Serach.module.css';

type SearchProps = {
    setSearchFilter: (filter: string) => void,
    setSearchBy: (searchBy: SearchBy) => void
}

const Search: React.FC<SearchProps> = ({setSearchFilter, setSearchBy}) => {

    const onSearching = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchFilter(e.target.value.toLowerCase());
    }

    return (
        <div className={st.wrapper} data-testid="search">
            <div className={st.buttons}>
                <h4>Search by:</h4>
                <label htmlFor="country-radio" className={st.radio}>
                    <input
                        onChange={(e) => e.target.checked && setSearchBy("name")}
                        type="radio" id="country-radio" name="searchBy"
                        value="country" defaultChecked={true}
                    />
                    <span>Country</span>
                </label>
                <label htmlFor="capital-radio" className={st.radio}>
                    <input
                        onChange={(e) => e.target.checked && setSearchBy("capital")}
                        type="radio" id="capital-radio"
                        name="searchBy" value="capital"
                    />
                    <span>Capital</span>
                </label>
                <label htmlFor="region-radio" className={st.radio}>
                    <input
                        onChange={(e) => e.target.checked && setSearchBy("region")}
                        type="radio" id="region-radio"
                        name="searchBy" value="region"
                    />
                    <span>Region</span>
                </label>
                <label htmlFor="code-radio" className={st.radio}>
                    <input
                        onChange={(e) => e.target.checked && setSearchBy("code")}
                        type="radio" id="code-radio"
                        name="searchBy" value="code"
                    />
                    <span>Code</span>
                </label>
            </div>
            <input className={st.input} type="text" onChange={onSearching}/>
        </div>
    )
}

export default Search