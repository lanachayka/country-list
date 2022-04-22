import st from './Container.module.css';
import flags from "../../images/flags.png";
import CountryDetails from "../CounrtyDetails/CountryDetails";

type ContainerProps = {
    selectedCard: string
}

const Container: React.FC<ContainerProps> = ({selectedCard}) => {
    return(<div data-testid="container-component" className={st.wrapper}>
            <img className={st.flag}
                 src={`https://flagcdn.com/h240/${selectedCard.toLowerCase()}.png`}
                 alt={`Flag of ${selectedCard}`}
            />
            <img className={st.flags} src={flags} alt="Flags"/>
            <div className={st.details}>
                <CountryDetails selectedCard={selectedCard} />
            </div>
    </div>
    )
}

export default Container