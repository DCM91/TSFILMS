import HeaderLanding from './components/headerLanding';
import LandingCarousel from './pages/FilmsCarousel';
import SeriesCarousel from './pages/SeriesCarousel';


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
        <SeriesCarousel />
      </section>

    </div>
  );
}

export default App;


