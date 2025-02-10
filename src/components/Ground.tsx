import useTextures from "../hooks/TextureHooks";

const Ground = () => {
  const { snowTexture } = useTextures();

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[100, 100, 1000, 1000]} />
      <meshStandardMaterial {...snowTexture} displacementScale={0.04} />
    </mesh>
  );
};

export default Ground;
