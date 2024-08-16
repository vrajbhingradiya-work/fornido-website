import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "Fornido - By Sahil Anand"}</title>
      </Head>
    </>
  );
};

export default PageHead;
