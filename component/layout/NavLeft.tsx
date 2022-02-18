import React, { useEffect, useState } from 'react';
import styled from './layout.module.scss';

const NavLeft: React.FC = ({ children }) => {
  const [on, setOn] = useState(false);
  const [cn, setCn] = useState([styled.leftNav, styled.on]);

  const menuBtnHandler = () => {
    setOn(!on);
  };

  useEffect(() => {
    if (on) setCn(() => [styled.leftNav, styled.off]);
    else setCn(() => [styled.leftNav, styled.on]);
  }, [on]);

  return (
    <>
      <div className={styled.menu} onClick={menuBtnHandler}>
        Menu
      </div>
      <nav className={cn.join(' ')}>{children}</nav>
    </>
  );
};

export default NavLeft;
