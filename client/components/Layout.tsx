import { ReactNode } from 'react';
import { NavBar } from './NavBar';

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <NavBar />
    {children}
  </>
);
