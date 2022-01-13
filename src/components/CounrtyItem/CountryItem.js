import st from './CountryItem.module.css'

export default function CountryItem({flag, country, capital, region, setIsCardChosen, setSelectedCard, selectedCard, setScrollPosition}){
    const selectCard = () => {
        setIsCardChosen(true);
        setSelectedCard(flag);
        setScrollPosition(window.scrollY);
    }
    return (<div data-test-id="item-component" id={selectedCard===flag ? st.selected : st.none} className={st.wrapper} onClick={selectCard}>
                <div>
                    <img className={st.flag}
                         src={`https://flagcdn.com/h240/${flag.toLowerCase()}.png`}
                         alt={`Flag of ${country}`}
                    />
                </div>
                <div className={st.description}>
                    <p className={st.title}>Country</p>
                    <p data-testid="country" className={st.textName}>{country}</p>
                    {capital && <>
                        <p className={st.title}>Capital</p>
                        <p data-testid="capital" className={st.text}>{capital}</p>
                    </>}
                    <p className={st.title}>Region</p>
                    <p data-testid="region" className={st.text}>{region}</p>
                </div>
            </div>)
}