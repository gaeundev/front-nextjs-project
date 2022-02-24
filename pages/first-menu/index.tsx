import type { NextPage } from 'next';
import Frame from 'component/frame/Frame';
import FirstContainer from 'forms/menu/FirstContainer';

const FirstMenu: NextPage = () => {
  return (
    <>
      <Frame>
        <FirstContainer></FirstContainer>
      </Frame>
    </>
  );
};

export default FirstMenu;
