import DreamJob from "@/components/Home/DreamJob";
import Hero from "@/components/Home/Hero";
import JobListing from "@/components/Home/JobListing";
import Portal from "@/components/Home/Portal";
import Promotion from "@/components/Home/Promotion";

export default function Home() {
  return (
    <>
      <Hero />
      <Portal />
      <JobListing />
      <DreamJob />
      <Promotion />
    </>
  );
}
