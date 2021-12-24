import st from './Header.module.css'
import {useMediaQuery} from "react-responsive";

export default function Header({isCardChosen}) {
    const isBigScreen = useMediaQuery({ query: '(min-width: 780px)' })
    return (<div className={st.wrapper}>
                {!isBigScreen &&
                    <p className={isCardChosen ? st.arrow : st.hidden}>&#8592;</p>
                }
                <p className={st.title}>Country List</p>
            </div>)
}