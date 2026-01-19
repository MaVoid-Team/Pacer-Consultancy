import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SmoothScroll from "./components/landing/SmoothScroll";
import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import Services from "./components/landing/Services";
import Methodology from "./components/landing/Methodology";
import Projects from "./components/landing/Projects";
import Clients from "./components/landing/Clients";
import Contact from "./components/landing/Contact";
import Footer from "./components/landing/Footer";
import Preloader from "./components/landing/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <SmoothScroll>
        <div className="min-h-screen bg-background text-foreground antialiased font-sans overflow-x-hidden">
          <Navbar />
          <main>
            <Hero startAnimation={!isLoading} />
            <Services />
            <Methodology />
            <Projects />
            <Clients />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}


export default App;
