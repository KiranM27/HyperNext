import Intro from '@/components/Landing/Intro';
import { PageWithPrimaryLayout } from '@/types/page';
import { Inter } from 'next/font/google';
import PrimaryLayout from 'src/layouts/PrimaryLayout';

const inter = Inter({ subsets: ['latin'] });

const Home: PageWithPrimaryLayout = () => {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <Intro />
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
