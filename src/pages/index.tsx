import * as React from "react";
import Layout from "@/app/components/Layout";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Philosophy from "@/app/sections/Philosophy";
import AboutYourself from "@/app/sections/AboutYourself";
import Testimonials from "@/app/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Philosophy /> */}
      <AboutYourself />
      {/* <Testimonials /> */}
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title="Zabi Babar">{page}</Layout>;
};
