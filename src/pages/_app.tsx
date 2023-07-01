import '@/styles/globals.css';
import { AppPropsWithLayout } from '@/types/page';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <ThemeProvider attribute="class">{getLayout(<Component {...pageProps} />)}</ThemeProvider>;
}
