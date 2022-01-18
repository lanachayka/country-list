import st from './Serach.module.css';

export default function Search({setSearchFilter}) {

    const onSearching = (e) => {
        setSearchFilter(e.target.value);
    }

    return (
        <input className={st.input} type="text" onChange={onSearching}/>
    )
}