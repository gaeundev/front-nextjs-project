import React, { useState } from 'react';
import styled from './frame.module.scss';

const Header: React.FC = () => {
  const [menuOn, setMenuOn] = useState('MENU');

  const menuBtnHandler = (e: any) => {
    e.preventDefault();

    setMenuOn((v) => (v === 'MENU' ? 'CLOSE' : 'MENU'));
  };

  return (
    <header className={styled.header}>
      <div>
        <div className={styled.logo}>
          <h1>HEADER</h1>
        </div>
        <div></div>
        <button
          className={styled.menuBtn}
          type="button"
          onClick={menuBtnHandler}
        >
          {menuOn}
        </button>
      </div>
    </header>
  );
};

export default Header;
