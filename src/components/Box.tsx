import { ThreeElements } from "@react-three/fiber";

const Box = (props: ThreeElements["mesh"]) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
};

export default Box;
