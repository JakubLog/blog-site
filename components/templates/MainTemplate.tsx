import React, { useState } from 'react';
import Bar from 'components/organisms/Bar/Bar';
import { Site, NavButton } from './MainTemplate.styles';
import Footer from 'components/molecules/Footer/Footer';

const MainTemplate: React.FC = ({ children }) => {
  const [isOpen, setOpenState] = useState(false);

  const toggleState = () => setOpenState((r) => !r);

  return (
    <Site>
      <Bar isOpen={isOpen} />
      <main aria-live="polite" aria-atomic="true">
        {children}
      </main>
      <NavButton aria-label="Navigation button" isOpen={isOpen} onClick={toggleState}>
        <span>&gt;</span>
        <span>X</span>
      </NavButton>
      <Footer />
    </Site>
  );
};

export default MainTemplate;