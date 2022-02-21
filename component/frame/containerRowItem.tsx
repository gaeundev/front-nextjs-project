// module
import React from 'react';

// css
import styled from './frame.module.scss';

const ContainerRowItem: React.FC = ({ children }) => {
  return (
    <>
      <div className={styled.containerRowItem}>{children}</div>
    </>
  );
};

export default ContainerRowItem;
