import st from './CountryList.module.css'
import CountryItem from "../CounrtyItem/CountryItem";

export default function CountryList() {
    const countries = [
        {id:'1', name:'Japan', capital: 'Tokyo', region: 'Asia', url: 'https://flagcdn.com/w2560/jp.png'},
        {id:'2', name:'Germany', capital: 'Berlin', region: 'Europe', url:'https://flagcdn.com/w2560/de.png'},
        {id:'3', name:'Ukraine', capital: 'Kiev', region: 'Europe', url:'https://flagcdn.com/w2560/ua.png'},
    ]
    return (
        <ul className={st.wrapper}>
            {countries.map(country=>(
                <CountryItem
                    key={country.id}
                    flag={country.url}
                    country={country.name}
                    capital={country.capital}
                    region={country.region}
                />
            ))}
        </ul>
    )
}