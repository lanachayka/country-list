import st from './CountryDetails.module.css';
import {COUNTRY} from "./queries";
import {useQuery} from "@apollo/client";
import CountryDetailsItem from "../CountryDetailsItem/CountryDetailsItem";
import position from './position';
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
        <img className={st.flag}
             src={`https://flagcdn.com/h240/${data.country.code.toLowerCase()}.png`}
             alt={`Flag of ${data.country.name}`}
        />
        <ul className={st.info}>
            <CountryDetailsItem direction="column-reverse"
                                top={position[5].top}
                                left={position[5].left}
                                color="pink" title="Country"
                                text={data.country.name}
                                last={false}/>
            <CountryDetailsItem direction="column-reverse"
                                top={position[4].top}
                                left={position[4].left}
                                color="green" title="Capital"
                                text={data.country.capital}
                                last={false}/>
            <CountryDetailsItem direction="column"
                                top={position[2].top}
                                left={position[2].left}
                                color="pink"
                                title="Region"
                                text={data.country.continent.name}
                                last={false}/>
            <CountryDetailsItem direction="row-reverse"
                                top={position[3].top}
                                left={position[3].left}
                                color="green"
                                title="Currencies"
                                text={currency}
                                last={false}/>
            <CountryDetailsItem direction="column"
                                top={position[1].top}
                                left={position[1].left}
                                color="pink"
                                title="Official Languages"
                                text={languages}
                                last={false}/>
            <CountryDetailsItem top={position[0].top}
                                left={position[0].left}
                                color="green"
                                title="Calling Code"
                                text={`+${data.country.phone}`}
                                last={!isBigScreen }/>
        </ul>
    </div>)
}