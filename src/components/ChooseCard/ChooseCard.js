import st from './ChooseCard.module.css'
import planet from '../../images/planet.png'
import flags from '../../images/flags.png'

export default function ChooseCard({isCardChosen}) {
    return (<div data-testid="choose-card-component" className={st.wrapper}>
                <img className={st.planet}
                     src={planet} alt="Planet emoji"
                />
                {isCardChosen
                    ? <img className={st.flags} src={flags} alt="Flags"/>
                    : <p data-testid="choose-text" className={st.title}>Choose a card :)</p>
                }
            </div>)
}