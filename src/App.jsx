import HomePageBanner from './HomePageBanner/HomePageBanner';
import AboutMe from './AboutMe/AboutMe';
import Timeline from './Timeline/Timeline';
import Footer from './Footer/Footer';
import RepoList from './RepoList/RepoList';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HomePageBanner />
      <AboutMe />
      <Timeline />
      <RepoList />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;