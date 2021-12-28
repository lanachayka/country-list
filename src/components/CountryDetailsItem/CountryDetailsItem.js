import vector from '../../images/vector.png';
import greenBall from '../../images/ellipseGreen.png';
import pinkBall from '../../images/ellipsePink.png';
import st from './CountryDetailsItem.module.css'

export default function CountryDetailsItem ({color, title, text, last}){
    let styledText = st.none;
    switch (title) {
        case "Currencies": styledText = st.currency;
        break;
        case "Official Languages": styledText = st.languages;
        break;
        case "Calling Code": styledText = st.phone;
    }
    if(text !== null && text.length > 0) {
        return (<li>
                <div className={st.wrapper}>
                    <img src={color==="green" ? greenBall : pinkBall} alt="list items"/>
                    <div className={st.info}>
                        <p className={st.title}>{title}</p>
                        {!Array.isArray(text)
                            ? <div id={styledText} className={st.text}>
                                <p>{text}</p>
                            </div>
                            : <div className={st.list}>{text.map(item=>(
                                <div key={item} id={styledText} className={st.text}>
                                    <p>{item}</p>
                                </div>))}</div>
                        }
                    </div>
                </div>
                {!last && <img src={vector} alt="vector" className={st.vector}/>}
            </li>
        )

    }
    return <></>
}