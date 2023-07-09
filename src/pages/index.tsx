import Benefits from '@/components/Landing/Benefits';
import Intro from '@/components/Landing/Intro';
import SectionTitle from '@/components/SectionTitle';
import { PRODUCT_DESCRIPTION } from '@/constants/meta';
import { PageWithPrimaryLayout } from '@/types/page';
import { Inter } from 'next/font/google';
import { PrimaryBenefits, SecondaryBenefits } from 'src/data/benefits';
import PrimaryLayout from 'src/layouts/PrimaryLayout';

const inter = Inter({ subsets: ['latin'] });

const Home: PageWithPrimaryLayout = () => {
  return (
    <div className="min-[h-screen/2] p-8">
      <div className={`flex flex-col items-center justify-between ${inter.className} w-full`}>
        <Intro />

        {/* Benefits Section */}
        <div className="mt-32">
          <SectionTitle title=" Why should you use HyperNext">{PRODUCT_DESCRIPTION}</SectionTitle>
          <Benefits imgPos="left" data={PrimaryBenefits} />
          <Benefits imgPos="right" data={SecondaryBenefits} />
        </div>
        {/* Benefits Section End */}
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
