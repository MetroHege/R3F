import { Canvas } from "@react-three/fiber";
import "./App.css";
import Box from "./components/Box";
import Ground from "./components/Ground";
import { PointerLockControls, Stats } from "@react-three/drei";

const App = () => {
  return (
    <section className="three-canvas">
      <Canvas>
        <PointerLockControls />
        <Stats />
        <ambientLight />
        <pointLight position={[10, 10, 10]} decay={10} />
        <Box rotation={[0, 1, 0]} position={[-1, 0, 0]} scale={[4, 4, 4]} />
        <Ground />
      </Canvas>
    </section>
  );
};

export default App;
