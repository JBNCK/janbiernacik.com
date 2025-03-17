import HomePageBanner from './HomePageBanner/HomePageBanner';
import AboutMe from './AboutMe/AboutMe';
import Footer from './Footer/Footer';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HomePageBanner />
      <AboutMe />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;