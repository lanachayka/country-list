type Continent = {
    name: string
}

type Languages = {
    name: string
}

export type Country = {
    code: string,
    name: string,
    continent: Continent,
    capital: string,
    currency: string,
    phone: string,
    languages: Languages[]
}

export type CountryDetailsQueryData = {
    country: Country
}