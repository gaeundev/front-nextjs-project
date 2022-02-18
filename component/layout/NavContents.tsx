import React from 'react';
import styled from './layout.module.scss';

const NavContents: React.FC = ({ children }) => {
  return <div className={styled.sideContents}>{children}</div>;
};

export default NavContents;
