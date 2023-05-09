import { type NextPage } from "next";
import Head from "next/head";

import Layout from "~/components/layout";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const query = api.mailchimp.getAllMembers.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-700 min-h-screen">
        <Layout>
        </Layout>
      </main>
    </>
  );
};

export default Home;
