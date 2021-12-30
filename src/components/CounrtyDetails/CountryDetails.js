import st from './CountryDetails.module.css';
import {COUNTRY} from "./queries";
import {useQuery} from "@apollo/client";
import CountryDetailsItem from "../CountryDetailsItem/CountryDetailsItem";
import {useMediaQuery} from "react-responsive";

export default function CountryDetails({selectedCard}) {

    const isBigScreen = useMediaQuery({ query: '(min-width: 780px)' });

    const { loading, error, data } = useQuery(COUNTRY, {
        variables: {code: selectedCard},
    });
    if (loading) return null;
    if (error) return `Error! ${error}`;

    const languages = [];
    data.country.languages.map(item=>languages.push(item.name));

    let currency = '';
    if(data.country.currency) {
        currency = data.country.currency.split(",");
    }

    return (<div className={st.wrapper}>
        { !isBigScreen && <img className={st.flag}
             src={`https://flagcdn.com/h240/${data.country.code.toLowerCase()}.png`}
             alt={`Flag of ${data.country.name}`}
        />}
        <ul className={st.info}>
            <CountryDetailsItem id="country" color="pink" title="Country"
                                text={data.country.name ? data.country.name : "N/A"} last={false}/>
            <CountryDetailsItem id="capital" color="green" title="Capital"
                                text={data.country.capital ? data.country.capital : "N/A"} last={false}/>
            <CountryDetailsItem id="region" color="pink" title="Region"
                                text={data.country.continent.name ? data.country.continent.name : "N/A"} last={false}/>
            <CountryDetailsItem id="currency" color="green" title="Currencies"
                                text={currency.length > 0 ? currency : "N/A"} last={false}/>
            <CountryDetailsItem id="languages" color="pink" title="Official Languages"
                                text={languages.length > 0 ? languages : "N/A"} last={false}/>
            <CountryDetailsItem id="phone" color="green" title="Calling Code"
                                text={`+${data.country.phone}`} last={!isBigScreen }/>
        </ul>
    </div>)
}