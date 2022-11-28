import React, {
  createContext, useReducer, Dispatch,
} from 'react';
import { UserActions, userReducer } from '../reducers/reducer';

type User = {
  name: string,
  email: string,
  address: string
};

type State = {
  userlist: User[];
};

const initialState: State = {
  userlist: [],
};

const AppContext = createContext<{
  state: State;
  dispatch: Dispatch<UserActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
