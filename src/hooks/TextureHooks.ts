import { useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";

const useTextures = () => {
  const snowTexture = useTexture(
    {
      map: "./snow/Snow011_1K-JPG_Color.jpg",
      displacementMap: "./snow/Snow011_1K-JPG_Displacement.jpg",
      normalMap: "./snow/Snow011_1K-JPG_NormalGL.jpg",
      roughnessMap: "./snow/Snow011_1K-JPG_Roughness.jpg",
      aoMap: "./snow/Snow011_1K-JPG_AmbientOcclusion.jpg",
    },
    (textures) => {
      Object.values(textures).forEach((texture) => {
        texture.wrapS = texture.wrapT = RepeatWrapping;
        texture.repeat.set(50, 50);
      });
    }
  );

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
