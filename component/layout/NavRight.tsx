import React from 'react';
import styled from './layout.module.scss';

const NavRight: React.FC = ({ children }) => {
  return <nav className={styled.rightNav}>{children}</nav>;
};

export default NavRight;
