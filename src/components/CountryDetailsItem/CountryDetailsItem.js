import vector from '../../images/vector.png';
import vectorBig from '../../images/vectorBig.png'
import greenBall from '../../images/ellipseGreen.png';
import greenBallBig from '../../images/ellipseGreenBig.png';
import pinkBall from '../../images/ellipsePink.png';
import pinkBallBig from '../../images/ellipsePinkBig.png';
import st from './CountryDetailsItem.module.css'
import {useMediaQuery} from "react-responsive";

export default function CountryDetailsItem ({ direction, top, left, color, title, text, last}){
    let styledText = st.none;
    switch (title) {
        case "Currencies": styledText = st.currency;
        break;
        case "Official Languages": styledText = st.languages;
        break;
        case "Calling Code": styledText = st.phone;
    }

    const isBigScreen = useMediaQuery({ query: '(min-width: 780px)' });
    let stylePosition = {position: "flex"};
    let styleDirection = {flexDirection:"row"}
    if(isBigScreen) {
        stylePosition={position: "absolute", top: top+"px", left: left+"px"}
        styleDirection={flexDirection:direction}
    }

    if(text !== null && text.length > 0) {
        return (<li style={stylePosition}>
                <div className={st.wrapper} style={styleDirection}>
                    <img src={color==="green" ? isBigScreen ? greenBallBig :greenBall : isBigScreen? pinkBallBig: pinkBall} alt="list items"/>
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
                {!last && <img src={isBigScreen ? vectorBig : vector} alt="vector" className={st.vector}/>}
            </li>
        )

    }
    return <></>
}