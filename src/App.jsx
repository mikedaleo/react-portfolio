import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function App() {
  const location = useLocation();

  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
