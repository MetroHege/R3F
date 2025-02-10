import { useTexture } from "@react-three/drei";

const useTextures = () => {
  const snowTexture = useTexture({
    map: "./snow/Snow011_1K-JPG_Color.jpg",
    displacementMap: "./snow/Snow011_1K-JPG_Displacement.jpg",
    normalMap: "./snow/Snow011_1K-JPG_NormalGL.jpg",
    roughnessMap: "./snow/Snow011_1K-JPG_Roughness.jpg",
    aoMap: "./snow/Snow011_1K-JPG_AmbientOcclusion.jpg",
  });

  const groundTexture = useTexture({
    map: "./ground/Ground078_1K-JPG_Color.jpg",
    displacementMap: "./ground/Ground078_1K-JPG_Displacement.jpg",
    normalMap: "./ground/Ground078_1K-JPG_NormalGL.jpg",
    roughnessMap: "./ground/Ground078_1K-JPG_Roughness.jpg",
    aoMap: "./ground/Ground078_1K-JPG_AmbientOcclusion.jpg",
  });

  return { snowTexture, groundTexture };
};

export default useTextures;
