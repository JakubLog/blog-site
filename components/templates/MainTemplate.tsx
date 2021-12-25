import React, { useEffect, useState } from 'react';
import Bar from 'components/organisms/Bar/Bar';
import { NavButton, Site } from './MainTemplate.styles';
import Footer from 'components/molecules/Footer/Footer';
import { theme } from 'styles/theme';

const MainTemplate: React.FC = ({ children }) => {
  const [isOpen, setOpenState] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOpenState(window.innerWidth > Number(theme.sizing.mobile));
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleState = () => setOpenState((r) => !r);

  return (
    <Site>
      <Bar isOpen={isOpen} />
      <main aria-live="polite" aria-atomic="true">
        {children}
      </main>
      <NavButton aria-label="Navigation button" isOpen={isOpen} onClick={toggleState}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </span>
      </NavButton>
      <Footer />
    </Site>
  );
};

export default MainTemplate;
