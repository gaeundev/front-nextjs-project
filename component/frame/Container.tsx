// module
import React from 'react';

// css
import styled from './frame.module.scss';

const Container: React.FC = ({ children }) => {
  return (
    <>
      <div className={styled.frameContainer}>{children}</div>
    </>
  );
};

export default Container;
