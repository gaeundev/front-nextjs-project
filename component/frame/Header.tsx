// module
import React from 'react';
import Link from 'next/link';

// css
import styled from './frame.module.scss';

const Header: React.FC = () => {
  return (
    <>
      <header className={styled.frameHeader}>
        <div>
          <Link href="/">
            <a>logo</a>
          </Link>
          <Link href="/">
            <a>메뉴1</a>
          </Link>
          <Link href="/">
            <a>메뉴2</a>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
