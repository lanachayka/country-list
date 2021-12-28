import st from './CountryDetails.module.css';
import {COUNTRY} from "./queries";
import {useQuery} from "@apollo/client";
import CountryDetailsItem from "../CountryDetailsItem/CountryDetailsItem";

export default function CountryDetails({selectedCard}) {
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
        <img className={st.flag}
             src={`https://flagcdn.com/h240/${data.country.code.toLowerCase()}.png`}
             alt={`Flag of ${data.country.name}`}
        />
        <ul className={st.info}>
            <CountryDetailsItem color="pink" title="Country" text={data.country.name} last={false}/>
            <CountryDetailsItem color="green" title="Capital" text={data.country.capital} last={false}/>
            <CountryDetailsItem color="pink" title="Region" text={data.country.continent.name} last={false}/>
            <CountryDetailsItem color="green" title="Currencies" text={currency} last={false}/>
            <CountryDetailsItem color="pink" title="Official Languages" text={languages} last={false}/>
            <CountryDetailsItem color="green" title="Calling Code" text={`+${data.country.phone}`} last={true}/>
        </ul>
    </div>)
}