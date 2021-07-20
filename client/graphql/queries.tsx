import gql from "graphql-tag";
import { UserListData } from '../interfaces/interfaces';

export const GET_USERS: UserListData = gql`
query listQuery($page:Int, $perPage:Int)
{
users(page:$page, perPage:$perPage){
name,
address,
}
}
`