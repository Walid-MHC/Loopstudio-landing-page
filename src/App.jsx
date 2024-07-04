import { iconClose, iconPinterest, imageCuriosityDesktop } from "./assets";
import { Hero, Navbar, About, Projects, Footer } from "./components";

function App() {
  return (
    <>
      <Hero />

      <div className="py-14 sm:px-14 px-6 flex flex-col items-center justify-start">
        <div className="w-full max-w-[1110px] ">
          <About />
          <Projects />
        </div>
      </div>

      <div className="bg-black flex flex-col items-center justify-start sm:px-14 px-6">
        <div className="w-full max-w-[1110px] ">
          <Footer />
        </div>
        
      </div>
    </>
  );
}

export default App;
