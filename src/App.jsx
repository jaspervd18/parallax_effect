import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <>
      <div>
      <Parallax pages={4} ref={ref}>
          <ParallaxLayer></ParallaxLayer>
        </Parallax>
      </div>
      </Parallax>
    </>
  );
}

export default App;
