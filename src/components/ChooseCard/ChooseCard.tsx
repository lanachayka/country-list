import st from './ChooseCard.module.css'
import planet from '../../images/planet.png'
import flags from '../../images/flags.png'

type ChooseCardProps = {
    isCardChosen: boolean
}

const ChooseCard: React.FC<ChooseCardProps>= ({isCardChosen}) => {
    return (<div data-testid="choose-card-component" className={st.wrapper}>
                <img className={st.planet}
                     src={planet} alt="Planet emoji"
                />
                {isCardChosen
                    ? <img className={st.flags} src={flags} alt="Flags"/>
                    : <p className={st.title}>Choose a card :)</p>
                }
            </div>)
}

export default ChooseCard