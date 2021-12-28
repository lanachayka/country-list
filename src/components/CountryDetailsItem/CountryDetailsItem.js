import vector from '../../images/vector.png';
import greenBall from '../../images/ellipseGreen.png';
import pinkBall from '../../images/ellipsePink.png';
import st from './CountryDetailsItem.module.css'

export default function CountryDetailsItem ({color, title, text, last}){
    return (<li className={st.mainWrapper}>
                <div className={st.wrapper}>
                    <img src={color==="green" ? greenBall : pinkBall} alt="list items"/>
                    <div className={st.info}>
                        <p className={st.title}>{title}</p>
                        <p className={st.text}>{text}</p>
                    </div>
                </div>
            {!last && <img src={vector} alt="vector" className={st.vector}/>}
            </li>
        )
}