import st from './Container.module.css';
import flags from "../../images/flags.png";
import CountryDetails from "../CounrtyDetails/CountryDetails";

export default function Container({selectedCard}){
    return(<div className={st.wrapper}>
            <img className={st.flag}
                 src={`https://flagcdn.com/h240/${selectedCard.toLowerCase()}.png`}
                 alt={`Flag of ${selectedCard}`}
            />
            <img className={st.flags} src={flags} alt="Flags"/>
            <CountryDetails selectedCard={selectedCard} />
    </div>
    )
}