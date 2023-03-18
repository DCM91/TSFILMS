import HeaderLanding from './components/headerLanding';
import LandingCarousel from './components/FilmsCarousel';
import { Footer } from './components/Footer';
import Films from './components/FetchAll';


function App() {
  return (
    <div>
      <header>
        <HeaderLanding />
      </header>
      <section>
        <LandingCarousel  />
      </section>
      <section>
        <Films/>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;


