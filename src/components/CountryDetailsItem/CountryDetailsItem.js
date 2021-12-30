import vector from '../../images/vector.png';
import greenBall from '../../images/ellipseGreen.png';
import pinkBall from '../../images/ellipsePink.png';
import st from './CountryDetailsItem.module.css'
import {useMediaQuery} from "react-responsive";

export default function CountryDetailsItem ({ id, color, title, text, last}){

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
                            : <div className={st.list}>{text.map(item=>(
                                <div key={item} id={st[id]} className={st.text}>
                                    <p>{item}</p>
                                </div>))}</div>
                        }
                    </div>
                </div>
                    {!last && !isBigScreen && <img src={vector} alt="vector" className={st.vector}/>}
              </li>)
}