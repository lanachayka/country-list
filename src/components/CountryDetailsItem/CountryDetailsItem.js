import greenBall from '../../images/ellipseGreen.png';
import pinkBall from '../../images/ellipsePink.png';
import st from './CountryDetailsItem.module.css'
import {useMediaQuery} from "react-responsive";

export default function CountryDetailsItem ({ id, color, title, text}){

    const isBigScreen = useMediaQuery({ query: '(min-width: 780px)' });

    return (<li className={st[id]}>
                <div className={st.wrapper}>
                    {!isBigScreen && <img src={color==="green" ? greenBall : pinkBall} alt="list items"/>}
                    <div className={st.info}>
                        <p className={st.title}>{title}</p>
                        {(!Array.isArray(text))
                            ? <div id={st[id]} className={st.text}>
                                <p>{text}</p>
                              </div>
                            : !isBigScreen
                                ? <div className={st.list}>{text.map(item=>(
                                <div key={item} id={st[id]} className={st.text}>
                                    <p>{item}</p>
                                </div>))}</div>
                                : <div id={st[id]} className={st.text}>
                                    <p>{text[0]}</p>
                                </div>
                        }
                    </div>
                </div>
              </li>)
}