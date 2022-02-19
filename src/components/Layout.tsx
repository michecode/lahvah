import Head from 'next/head';
import Navigation from './Navigation';
// import Footer from './Footer';

type Props = {
  className?: string;
  children: React.ReactNode;
  desc?: string;
  title: string;
};

export default function Layout({
  className,
  children,
  title,
  desc,
}: Props) {
  const description = desc || 'A Next.js multilingual site';

  return (
    <main className={className}>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Navigation />
      {children}
      {/* <Footer/> */}
    </main>
  );
}