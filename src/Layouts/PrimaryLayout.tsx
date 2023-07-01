import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const PrimaryLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default PrimaryLayout;
