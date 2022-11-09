import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import UpdateTable from "@components/UpdateTable";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Working with result sets" />
        <hr />
        
        
        <UpdateTable />
      </main>
      <Footer />
    </div>
  );
}
