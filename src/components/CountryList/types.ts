type Continent = {
    name: string
}

type Country = {
    code: string,
    name: string,
    continent: Continent,
    capital: string,
}

export type CountriesQueryData = {
    countries: Country[]
}