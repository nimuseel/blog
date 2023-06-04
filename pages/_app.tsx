import '../src/styles/global.scss';

import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../src/libs/gtag';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
