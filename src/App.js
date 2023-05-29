import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
    import Header from './components/Header'
    import NavTabs from './NavTabs';
    import Portfolio from './components/Portfolio';
    import About from './components/About';
    import Resume from './components/Resume';
    import Contact from './components/Contact';

function App() {

      const [currentPage, setCurrentPage] = useState('About');
    
      // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
      const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Resume') {
          return <Resume/>;
        }
        return <Contact />;
      };
    
      const handlePageChange = (page) => setCurrentPage(page);
    
      return (
        <div>
          <Header/>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
          <Footer/>
        </div>
      );
    }

export default App;
