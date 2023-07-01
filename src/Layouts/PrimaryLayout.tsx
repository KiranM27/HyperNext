import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import React from 'react';

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const PrimaryLayout: React.FC<Props> = ({ children, title, description }) => {
  return (
    <>
      {/* page meta data */}
      <Head>
        <title>{title || 'HyperNext'}</title>
        <meta name="description" content={description || 'Ignite your Next.js projects with enhanced productivity and unleash boundless development possibilities.'} />
      </Head>
      {/* end of page meta data */}

      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default PrimaryLayout;
