import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { TechStack } from './components/TechStack';
import { Comparison } from './components/Comparison';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { AppNavbar } from './layout/AppNavbar';
import { DCAPage } from './pages/dca/DCAPage';
import { PortfolioPage } from './pages/portfolio/PortfolioPage';
import { TransactionPage } from './pages/transaction/TransactionPage';
import { SwapPage } from './pages/swap/SwapPage';
import { CustomCursor } from './components/CustomCursor';

type Page = 'landing' | 'dca' | 'portfolio' | 'transactions' | 'swap';

const App = () => {
  // Initialize state from localStorage or default to 'landing'
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    const savedPage = localStorage.getItem('currentPage');
    return (savedPage as Page) || 'landing';
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Save to localStorage whenever the page changes
  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
    
    // Close sidebar when changing pages
    setIsSidebarOpen(false);
    
    // Update body class based on current page
    if (currentPage === 'landing') {
      document.body.classList.add('landing-page');
    } else {
      document.body.classList.remove('landing-page');
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'dca':
      case 'portfolio':
      case 'transactions':
      case 'swap':
        return (
          <>
            <CustomCursor theme="app" />
            <AppNavbar 
              currentPage={currentPage} 
              setCurrentPage={setCurrentPage}
              sidebarOpen={isSidebarOpen}
            />
            {currentPage === 'dca' && <DCAPage onSidebarToggle={setIsSidebarOpen} />}
            {currentPage === 'portfolio' && <PortfolioPage />}
            {currentPage === 'transactions' && <TransactionPage />}
            {currentPage === 'swap' && <SwapPage />}
          </>
        );
      case 'landing':
      default:
        return (
          <div className="min-h-screen bg-white">
            <Navbar />
            <Hero onStartInvesting={() => setCurrentPage('dca')} />
            <Problem />
            <Solution />
            <HowItWorks />
            <Features />
            <TechStack />
            <Comparison />
            <SocialProof />
            <FAQ />
            <CTA />
            <Footer />
          </div>
        );
    }
  };

  return renderPage();
};

export default App;
