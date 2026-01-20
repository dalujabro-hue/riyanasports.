import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Products />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
