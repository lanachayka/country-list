import st from './CountryDetails.module.css';
import { COUNTRY } from "./queries";
import { useQuery } from "@apollo/client";
import CountryDetailsItem from "../CountryDetailsItem/CountryDetailsItem";
import { useMediaQuery } from "react-responsive";
import { checkData } from "./helper";
import { CountryDetailsQueryData } from './types'

type CountryDetailsProps = {
    selectedCard: string
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ selectedCard }) => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 780px)' });

    const { loading, error, data } = useQuery<CountryDetailsQueryData>(COUNTRY, {
        variables: { code: selectedCard },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (data) {
        return (<div className={st.wrapper} data-testid="country-details-component">
            {!isBigScreen && <img className={st.flag}
                src={`https://flagcdn.com/h240/${data.country.code.toLowerCase()}.png`}
                alt={`Flag of ${data.country.name}`}
            />}
            <ul className={st.info}>
                <CountryDetailsItem id="country" color="pink" title="Country"
                    text={checkData(data.country.name)} />
                <CountryDetailsItem id="capital" color="green" title="Capital"
                    text={checkData(data.country.capital)} />
                <CountryDetailsItem id="region" color="pink" title="Region"
                    text={checkData(data.country.continent.name)} />
                <CountryDetailsItem id="currency" color="green" title="Currencies"
                    text={checkData(data.country.currency, "currency")}
                />
                <CountryDetailsItem id="languages" color="pink" title="Official Languages"
                    text={checkData(data.country.languages, "languages")} />
                <CountryDetailsItem id="phone" color="green" title="Calling Code"
                    text={checkData(data.country.phone, "phone")} />
            </ul>
        </div>)
    }
    return <></>
}

export default CountryDetails;
