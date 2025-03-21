import HomePageBanner from '../components/HomePageBanner/HomePageBanner';
import AboutMe from '../components/AboutMe/AboutMe';
import Timeline from '../components/Timeline/Timeline';
import Footer from '../components/Footer/Footer';
import RepoList from '../components/RepoList/RepoList';
import fadeIn from '../scripts/fade-in';
import changeTitle from '../scripts/change-title';

function App() {
  fadeIn();
  changeTitle();

  return (
    <div className='page'>
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