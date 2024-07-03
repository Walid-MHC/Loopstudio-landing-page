import { iconClose, iconPinterest, imageCuriosityDesktop } from "./assets";
import { Hero, Navbar, About, Projects } from "./components";

function App() {
  return (
    <>
      <div>
        <div>
          <div>
            <Navbar />
          </div>
        </div>

        <Hero />
      </div>

      <div>
        <div>
          <About />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
