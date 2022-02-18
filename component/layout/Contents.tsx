import React from 'react';
import styled from './layout.module.scss';

const Contents: React.FC = ({ children }) => {
  return <div className={styled.contents}>{children}</div>;
};

export default Contents;
