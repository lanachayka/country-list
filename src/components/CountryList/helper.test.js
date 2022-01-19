import {filterCountries} from "./helper";

const countries = [
    {
        code: "AD",
        name: "Andorra",
        continent: {
            name: "Europe"
        },
        capital: "Andorra la Vella"
    },
    {
        code: "AE",
        name: "United Arab Emirates",
        continent: {
            name: "Asia"
        },
        capital: "Abu Dhabi"
    },
    {
        code: "AF",
        name: "Afghanistan",
        continent: {
            name: "Asia"
        },
        capital: "Kabul"
    }
]

test('filterCountries should return array with length 1', () => {
   expect(filterCountries(countries, 'region', 'e')).toHaveLength(1);
});

test('filterCountries should return array with length 3', () => {
    expect(filterCountries(countries, 'code', 'a')).toHaveLength(3);
});

test('filterCountries should return array with length 0', () => {
    expect(filterCountries(countries, 'country', 'Zero')).toHaveLength(0);
});