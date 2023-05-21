import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layout/Layout";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Full Stack Web Developer | Deepak Mishra</title>
        <meta name="description" content="Expertly crafted websites by a full stack web developer. Explore my portfolio and experience seamless functionality with cutting-edge technologies. Elevate your online presence today!" />
      </Head>
      
      <Home />
      <Process />
      <About />
      <Portfolio />
      <Skills />
      <Service />
      <Testimonial />
      <News />
      <Contact />
    </Layout>
  );
};
export default Index;
