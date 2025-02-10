import { ThreeElements } from "@react-three/fiber";
import useTextures from "../hooks/TextureHooks";

const Box = (props: ThreeElements["mesh"]) => {
  const { groundTexture } = useTextures();

  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1, 100, 100, 100]} />
      <meshStandardMaterial
        {...groundTexture}
        displacementScale={0.02}
        roughness={0.5}
      />
    </mesh>
  );
};

export default Box;
