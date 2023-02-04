import { gql } from "@apollo/client"

 export const ALL_USERS = gql`
 query ALL_USERS {
   users  {
         name
         address
         email
         phone        
   }
 }
`