import { Canvas } from "@react-three/fiber";
import "./App.css";
import Box from "./components/Box";

const App = () => {
  return (
    <section className="three-canvas">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1, 0, 0]} />
        <Box position={[1, 0, 0]} />
      </Canvas>
    </section>
  );
};

export default App;
