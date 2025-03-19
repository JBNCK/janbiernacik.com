import HomePageBanner from './HomePageBanner/HomePageBanner';
import AboutMe from './AboutMe/AboutMe';
import Timeline from './Timeline/Timeline';
import Footer from './Footer/Footer';
import RepoList from './RepoList/RepoList';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      document.getElementById("page").style.opacity = "1";
    }, 1);
});

  return (
    <div id='page'>
      <HomePageBanner />
      <AboutMe />
      <Timeline />
      <RepoList />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;