import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
