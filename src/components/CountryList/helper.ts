type Continent = {
    name: string
}

type Countries = {
    code: string
    name: string
    continent: Continent
    capital: string
}

export type SearchBy = "code" | "region" | "capital" | "name"

export const filterCountries = (countries: Countries[], searchBy: SearchBy, searchFilter: string): Countries[] => {
    return searchBy === 'region'
        ? countries.filter(country => country.continent.name && country.continent.name.toLowerCase().includes(searchFilter))
        : countries.filter(country => country[searchBy] && country[searchBy].toLowerCase().includes(searchFilter))
}