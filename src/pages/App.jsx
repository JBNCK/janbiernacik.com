import HomePageBanner from '../components/HomePageBanner/HomePageBanner';
import AboutMe from '../components/AboutMe/AboutMe';
import Timeline from '../components/Timeline/Timeline';
import Footer from '../components/Footer/Footer';
import RepoList from '../components/RepoList/RepoList';
import fadeIn from '../scripts/fade-in';

function App() {
  fadeIn();

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