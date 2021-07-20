export interface UserObj {
    name: string;   
    address: string;
  
}

export interface UserListData {
    users: [UserObj];
}


export interface UserListVars {
    page: number;
    perPage: number
}