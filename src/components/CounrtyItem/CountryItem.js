import st from './CountryItem.module.css'

export default function CountryItem({flag, country, capital, region}){
    return (<div className={st.wrapper}>
                <div>
                    <img className={st.flag}
                         src={`https://flagcdn.com/${flag.toLowerCase()}.svg`}
                         alt={`Flag of ${country}`}
                    />
                </div>
                <div className={st.description}>
                    <p className={st.title}>Country</p>
                    <p className={st.textName}>{country}</p>
                    <p className={st.title}>Capital</p>
                    <p className={st.text}>{capital}</p>
                    <p className={st.title}>Region</p>
                    <p className={st.text}>{region}</p>
                </div>
            </div>)
}