// module
import React from 'react';

// css
import styled from './frame.module.scss';

const ContainerItem: React.FC = ({ children }) => {
  return (
    <>
      <div className={styled.containerItem}>{children}</div>
    </>
  );
};

export default ContainerItem;
