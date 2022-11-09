import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import UpdateTable from "@components/UpdateTable";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Toolbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Next.js Toolbox" />
        <hr />
        <p className="description">
         Testing Netlify
        </p>
        
        <UpdateTable />
      </main>
      <Footer />
    </div>
  );
}
