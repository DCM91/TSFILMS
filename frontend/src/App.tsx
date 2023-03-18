import HeaderLanding from './components/headerLanding';
import LandingCarousel from './components/FilmsCarousel';
import { Footer } from './components/Footer';


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
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;


