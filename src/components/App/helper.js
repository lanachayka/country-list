export const showCountryList = (isBigScreen, isCardChosen, Component) => {
    if(!isBigScreen && isCardChosen) {
        return (<div className="Main"/>)
    } else return Component
}

export const showChooseCard = (isBigScreen, isCardChosen, Component) => {
    if(isBigScreen && isCardChosen) {
        return (<div className="Main"/>)
    } else return Component
}

export const showCountryDetails = (isBigScreen, isCardChosen, Component) => {
    if(!isBigScreen && isCardChosen) {
        return Component
    } else return (<div className="Main"/>);
}

export const showContainer = (isBigScreen, isCardChosen, Component) => {
    if(isBigScreen && isCardChosen) {
        return Component
    } else return (<div className="Main"/>)
}