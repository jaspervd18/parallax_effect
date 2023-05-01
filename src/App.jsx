import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <>
      <div>
        <Parallax pages={4}>
          <ParallaxLayer></ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default App;
