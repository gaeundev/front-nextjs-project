import type { NextPage } from 'next';
import { useState } from 'react';

import { sideMenu } from 'api/menu';

import Frame from 'component/frame/Frame';
import Contents from 'component/layout/Contents';
import NavContents from 'component/layout/NavContents';
import NavLeft from 'component/layout/NavLeft';
import NavRight from 'component/layout/NavRight';

const Home: NextPage = () => {
  const [menu, setMenu] = useState(sideMenu);

  return (
    <>
      <Frame>
        <Contents>Contents</Contents>
        <NavContents>
          <NavLeft>
            {menu.map((v, i) => {
              return <div key={i}>{v.name}</div>;
            })}
          </NavLeft>
          <NavRight>
            <div>NavRight</div>
          </NavRight>
        </NavContents>
        <Contents>Contents</Contents>
      </Frame>
    </>
  );
};

export default Home;
