import HeaderLanding from './components/headerLanding';
import LandingCarousel from './components/FilmsCarousel';
import { Footer } from './components/Footer';
import Films from './components/FetchAll';


function App() {
  return (
    <div>

      <header style={{display:"block"}}>
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


