// Components==============
import Head from 'next/head';
// =========================

export default function Demo() {
  return (
    <>
      <Head>
        <title>Decathlon Dev Case</title>
      </Head>
      <div className="vtmn-flex vtmn-bg-brand-digital-light-3 vtmn-rounded-lg vtmn-p-6 vtmn-m-3">
        <p className="vtmn-text-xl vtmn-text-center vtmn-font-semibold vtmn-text-black">
          Welcome to{' '}
          <span className="vtmn-text-brand-digital vtmn-text-2xl">
            @vtmn/css
          </span>
          <span role="img" aria-label="Tada!">
            🎉
          </span>
        </p>
      </div>
    </>
  );
}
