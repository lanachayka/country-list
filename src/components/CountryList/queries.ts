import { gql } from '@apollo/client';

export const COUNTRIES = gql`
    query GetCountries{
      countries {
        code
        name
        continent {
          name
        }
        capital
      }
    }
`