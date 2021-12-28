import st from './ChooseCard.module.css'
import planet from '../../images/planet.png'
import flags from '../../images/flags.png'

export default function ChooseCard({isCardChosen}) {
    return (<div className={st.wrapper}>
                <img id={isCardChosen ? st.planetCenter : st.none}
                     className={st.planet}
                     src={planet} alt="Planet emoji"
                />
                {isCardChosen
                    ? <img className={st.flags} src={flags} alt="Flags"/>
                    : <p className={st.title}>Choose a card :)</p>
                }
            </div>)
}