type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
      type: Key;
    }
    : {
      type: Key;
      payload: M[Key];
    }
};

export enum Types {
  LoadMore = 'LOAD_MORE',
}

type User = {
  name: string,
  email: string,
  address: string
};

type State = {
  userlist: User[];
};

type UsersPayload = {
  [Types.LoadMore]: {
    userlist: User[],
  };
};

export type UserActions = ActionMap<UsersPayload>[keyof ActionMap<UsersPayload>];

export const userReducer = (
  state: State,
  action: UserActions,
) => {
  switch (action.type) {
    case Types.LoadMore:
      return {
        ...state,
        userlist: [...state.userlist, ...action.payload.userlist],
      };
    default:
      return state;
  }
};
