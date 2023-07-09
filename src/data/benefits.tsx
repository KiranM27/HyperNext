import { FaceSmileIcon, ChartBarSquareIcon, CursorArrowRaysIcon, DevicePhoneMobileIcon, AdjustmentsHorizontalIcon, SunIcon } from '@heroicons/react/24/solid';
import IconWrapper from '@/components/IconWrapper';
import benefitOneImg from '@/public/images/landing/launch.png';
import benefitTwoImg from '@/public/images/landing/launch.png';
import { StaticImageData } from 'next/image';

// create a type for the data
export type TBenefits = {
  title: string;
  desc: string;
  image: StaticImageData;
  bullets: TBullet[];
};

export type TBenefitBulletIcon = React.ReactNode;

export type TBullet = {
  title: string;
  desc: string;
  icon: TBenefitBulletIcon;
};

export const IconWrapperClass = 'w-7 h-7 text-white';

export const PrimaryBenefits: TBenefits = {
  title: 'Highlight your benefits',
  desc: 'You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Understand your customers',
      desc: 'Then explain the first point breifly in one or two lines.',
      icon: <IconWrapper icon={<FaceSmileIcon />} />,
    },
    {
      title: 'Improve acquisition',
      desc: 'Here you can add the next benefit point.',
      icon: <IconWrapper icon={<ChartBarSquareIcon />} />,
    },
    {
      title: 'Drive customer retention',
      desc: 'This will be your last bullet point in this section.',
      icon: <IconWrapper icon={<CursorArrowRaysIcon />} />,
    },
  ],
};

export const SecondaryBenefits: TBenefits = {
  title: 'Offer more benefits here',
  desc: 'You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.',
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Mobile Responsive Template',
      desc: 'Nextly is designed as a mobile first responsive template.',
      icon: <IconWrapper icon={<DevicePhoneMobileIcon />} />,
    },
    {
      title: 'Powered by Next.js & TailwindCSS',
      desc: 'This template is powered by latest technologies and tools.',
      icon: <IconWrapper icon={<AdjustmentsHorizontalIcon />} />,
    },
    {
      title: 'Dark & Light Mode',
      desc: 'Nextly comes with a zero-config light & dark mode. ',
      icon: <IconWrapper icon={<SunIcon />} />,
    },
  ],
};
