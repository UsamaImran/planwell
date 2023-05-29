import StepForm from '@/components/stepForm/StepForm';
import Head from 'next/head';

export default function Home() {
  return (
    <main>
      {renderHead()}
      <StepForm />
    </main>
  );
}

const renderHead = () => (
  <Head>
    <title>Planwell</title>
  </Head>
);
