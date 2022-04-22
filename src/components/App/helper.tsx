import React from "react"

export const showCountryList = (isBigScreen: boolean, isCardChosen: boolean, Component: JSX.Element): JSX.Element => {
    if(!isBigScreen && isCardChosen) {
        return <div className="Main"/>
    } else return Component
}

export const showChooseCard = (isBigScreen: boolean, isCardChosen: boolean, Component: JSX.Element): JSX.Element => {
    if(isBigScreen && isCardChosen) {
        return (<div className="Main"/>)
    } else return Component
}

export const showCountryDetails = (isBigScreen: boolean, isCardChosen: boolean, Component: JSX.Element): JSX.Element => {
    if(!isBigScreen && isCardChosen) {
        return Component
    } else return (<div className="Main"/>);
}

export const showContainer = (isBigScreen: boolean, isCardChosen: boolean, Component: JSX.Element): JSX.Element => {
    if(isBigScreen && isCardChosen) {
        return Component
    } else return (<div className="Main"/>)
}