import st from './ChooseCard.module.css'
import planet from '../../images/planet.png'

export default function ChooseCard() {
    return (<div className={st.wrapper}>
                <img className={st.image} src={planet} alt="Planet emoji"/>
                <p className={st.title}>Choose a card :)</p>
            </div>)
}