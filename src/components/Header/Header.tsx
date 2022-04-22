import st from './Header.module.css'
import { useMediaQuery } from "react-responsive";

type HeaderProps = {
    isCardChosen: boolean,
    setIsCardChosen: (isCardChosen: boolean) => void
}

const Header: React.FC<HeaderProps> = ({isCardChosen, setIsCardChosen}) => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 780px)' });
    return (<header className={st.wrapper}>
                {!isBigScreen &&
                    <p  data-testid="arrow"
                        onClick={()=>setIsCardChosen(false)}
                        className={isCardChosen ? st.arrow : st.hidden}
                    >&#8592;</p>
                }
                <p className={st.title}>Country List</p>
            </header>)
}

export default Header