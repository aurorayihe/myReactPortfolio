import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import '../styles/style.css';

function PortfolioContainer() {
    // Set home as the default page.
    const [currentPage, setCurrentPage] = useState('AboutMe');

    // Checking to see what the value of 'currentPage' is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'Resume') {
          return <Resume />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'AboutMe') {
          return <AboutMe />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
      };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
};

export default PortfolioContainer;