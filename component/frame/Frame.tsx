// module
import React from 'react';

// component
import Footer from './Footer';
import Header from './Header';
import Container from './Container';

const Frame: React.FC = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Container>{children}</Container>
      <Footer></Footer>
    </>
  );
};

export default Frame;
