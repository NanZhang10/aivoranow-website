import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/fx/ScrollProgress";
import { Marquee } from "@/components/fx/Marquee";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Products />
        <Marquee />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
