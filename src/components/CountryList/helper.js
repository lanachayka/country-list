export const filterCountries = (countries, searchBy, searchFilter) => {
    return searchBy === 'region'
    ? countries.filter(country => country.continent.name && country.continent.name.toLowerCase().includes(searchFilter))
    : countries.filter(country => country[searchBy] && country[searchBy].toLowerCase().includes(searchFilter))
}