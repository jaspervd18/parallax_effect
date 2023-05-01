import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import landscape from "./landscape.jpg";
import cave from "./cave.jpg";

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${landscape})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${cave})`,
            backgroundSize: "cover",
          }}
        />

        {/* <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={} />
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Ready to dig down?</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Nothing much to see here...</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
