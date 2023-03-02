import Head from "next/head";
import styles from "../../styles/Home.module.css";

// **Custom Components
import Banner from "../components/user/Home/Banner/Banner";
import Categories from "../components/user/Home/Categories/Categories";
import SubmitProject from "../components/user/Home/SubmitProject/SubmitProject";
import LatestArticles from "../components/user/Home/LatestArticles/LatestArticles";
import Socials from "../components/user/Home/Socials/Socials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Awesome Lens</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Banner />
      <Categories />
      <SubmitProject />
      <LatestArticles />
      <Socials />
    </>
  );
}
