import HeaderLanding from './components/headerLanding';
import LandingCarousel from './pages/landing';

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
        <LandingCarousel  />
      </section>

    </div>
  );
}

export default App;


