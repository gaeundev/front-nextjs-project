// module
import React from 'react';

// css
import styled from './frame.module.scss';

const Footer: React.FC = () => {
  return (
    <>
      <footer className={styled.frameFooter}>
        <div className={styled.footerList}>
          <div className={styled.footerItem}>
            <div>고객센터</div>
            <div>이용약관</div>
            <div>소개</div>
          </div>
          <div className={styled.footerItem}>
            <div>회사주소 및 연락처</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
