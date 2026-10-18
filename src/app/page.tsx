import { Categories } from "@/components/home/Categories";
import { Courses } from "@/components/home/Courses";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Instructors } from "@/components/home/Instructors";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Courses />
        <HowItWorks />
        <Instructors />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
