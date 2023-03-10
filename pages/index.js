import Head from 'next/head';
import FilterSection from '../components/FilterSection/FilterSection';
import Products from '../components/Products/Products';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#f8f7fd] min-h-screen p-16 space-y-14">
        <div className="flex items-center justify-between">
          <h1 className="text-[#05061a] text-4xl font-bold">
            Search Properties to rent
          </h1>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-transparent"
          />
        </div>
        <FilterSection />
      </main>
    </>
  );
}
