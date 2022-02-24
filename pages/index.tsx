import type { NextPage } from 'next';
import Frame from 'component/frame/Frame';

const Home: NextPage = () => {
  return (
    <>
      <Frame>
        <div style={{ color: 'white', textAlign: 'center' }}>홈 메인</div>
      </Frame>
    </>
  );
};

export default Home;
