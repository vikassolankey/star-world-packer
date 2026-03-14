import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { QuoteProvider } from "./context/QuoteContext";
import { QuoteModal } from "./components/QuoteModal";
import Home from "./pages/Home";
import About from "./pages/About";
import WhyChoose from "./pages/WhyChoose";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Branches from "./pages/Branches";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <QuoteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="about" element={<About />} />
            <Route path="why-choose-us" element={<WhyChoose />} />
            <Route path="services" element={<Services />} /> */}
            <Route path="branches" element={<Branches />} />
            {/* <Route path="gallery" element={<Gallery />} />
            <Route path="clients" element={<Clients />} />
            <Route path="contact" element={<Contact />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      <QuoteModal />
    </QuoteProvider>
  );
}
