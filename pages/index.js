import Head from 'next/head';
import Page from './Page';
import Homepage from '../components/Homepage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ai-customer-support</title>
      </Head>
      <Homepage/>
    </div>
  );
}
