import st from './CountryDetails.module.css';
import {COUNTRY} from "./queries";
import {useQuery} from "@apollo/client";
import vector from '../../images/vector.png'

export default function CountryDetails({selectedCard}) {
    const { loading, error, data } = useQuery(COUNTRY, {
        variables: {code: selectedCard},
    });
    if (loading) return null;
    if (error) return `Error! ${error}`;

    return (<div className={st.wrapper}>
        <img className={st.flag}
             src={`https://flagcdn.com/h240/${data.country.code.toLowerCase()}.png`}
             alt={`Flag of ${data.country.name}`}
        />
        <ul>
            <li>
                <p className={st.title}>Country</p>
                <p className={st.text}>{data.country.name}</p>
            </li>
            <img src={vector} alt="vector"/>
            <li>
                <p className={st.title}>Capital</p>
                <p className={st.text}>{data.country.capital}</p>
            </li>
            <img src={vector} alt="vector"/>
            <li>
                <p className={st.title}>Region</p>
                <p className={st.text}>{data.country.continent.name}</p>
            </li>
            <img src={vector} alt="vector"/>
            <li>
                <p className={st.title}>Region</p>
                <p className={st.text}>{data.country.currency}</p>
            </li>
            <img src={vector} alt="vector"/>
            <li>
                <p className={st.title}>Official Languages</p>
                <p className={st.text}>{data.country.languages.map(language => `${language.name} `)}</p>
            </li>
            <img src={vector} alt="vector"/>
            <li>
                <p className={st.title}>Calling Code</p>
                <p className={st.text}>{data.country.phone}</p>
            </li>
        </ul>
    </div>)
}