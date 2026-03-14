import React, { createContext, useContext, useState, ReactNode } from 'react';

interface QuoteContextType {
  isQuoteModalOpen: boolean;
  openQuoteModal: (city?: string) => void;
  closeQuoteModal: () => void;
  selectedCity: string;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');

  const openQuoteModal = (city?: string) => {
    if (city) setSelectedCity(city);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedCity('');
  };

  return (
    <QuoteContext.Provider value={{ isQuoteModalOpen, openQuoteModal, closeQuoteModal, selectedCity }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};
