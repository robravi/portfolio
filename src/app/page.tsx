import Hero from "@/components/home/Hero";
import StatBar from "@/components/home/StatBar";
import Experience from "@/components/home/Experience";
import Work from "@/components/home/Work";
import About from "@/components/home/About";
import Process from "@/components/home/Process";
import Tools from "@/components/home/Tools";

export default function Home() {
  return (
    <>
      <Hero />
      <StatBar />
      <Experience />
      <Work />
      <About />
      <Process />
      <Tools />
    </>
  );
}
