import { Head, Search } from 'nextra/components';
import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog';
import { getPageMap } from 'nextra/page-map';
import { useRouter } from 'next/navigation';
import type { Metadata } from 'next';
import { useEffect } from 'react';
import * as gtag from '../src/libs/gtag';
import 'nextra-theme-blog/style.css';

export const metadata: Metadata = {
  title: 'nimuseel-dev',
  description: '생각에 대한 정리를 합니다.',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://nimuseel.dev/',
    title: 'nimuseel-dev',
    siteName: 'nimuseel',
  },
};

export default async function RootLayout({ children }) {
  // const router = useRouter();

  //   useEffect(() => {
  //     const handleRouteChange = (url: URL) => {
  //       gtag.pageView(url);
  //     };

  //     router.events.on('routeChangeComplete', handleRouteChange);

  //     return () => {
  //       router.events.off('routeChangeComplete', handleRouteChange);
  //     };
  //   }, [router.events]);

  return (
    <html suppressHydrationWarning>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <body>
        <Layout>
          <Navbar pageMap={await getPageMap()}>
            <Search />
            <ThemeSwitch />
          </Navbar>

          {children}

          <Footer>
            <abbr
              title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
              style={{ cursor: 'help' }}
            >
              CC BY-NC 4.0
            </abbr>{' '}
            {new Date().getFullYear()} © Dimitri POSTOLOV.
            <a href="/feed.xml" style={{ float: 'right' }}>
              RSS
            </a>
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
