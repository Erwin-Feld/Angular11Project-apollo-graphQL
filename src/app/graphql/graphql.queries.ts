import { gql } from "apollo-angular";

const FIRST_QUERY = gql`
    query {
        users {
            id
            firstname
            age
        }
    }   
`
export {FIRST_QUERY};