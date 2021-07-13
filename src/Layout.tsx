import React, { useContext } from 'react';
import { ThemeContext } from './Context';

export const Layout = ({ children }: any) => {
  const theme = useContext(ThemeContext);
  return <div className={`Context ${theme}`}>{children}</div>;
};
