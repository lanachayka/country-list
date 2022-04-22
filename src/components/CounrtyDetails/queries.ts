import { gql } from '@apollo/client';

export const COUNTRY = gql`
    query GetCountry($code: ID!){
      country (code: $code) {
        code
        name
        continent {
          name
        }
        capital
        currency
        phone
        languages {
          name
        }
      }
    }
`