import { gql } from "apollo-angular";

const FIRST_QUERY = gql`
    query {
        users {
            id
            email
            name
        }
    }   
`
export {FIRST_QUERY};