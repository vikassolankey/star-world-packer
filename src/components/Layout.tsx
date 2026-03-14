import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopHeader } from './TopHeader';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
import { ScrollToTop } from './ScrollToTop';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <TopHeader />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};
