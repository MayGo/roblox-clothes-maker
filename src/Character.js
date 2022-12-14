/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useTextureEditorContext } from "./TextureEditorProvider";

export function Character(props) {
  const { nodes, materials } = useGLTF("/models/Character.glb");
  const [image] = useTextureEditorContext();
  const textureProps = useTexture({
    map: image,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.trimatehCharacter.geometry}
        material={materials.Handle1Mtl}
        rotation={[Math.PI / 2, 0, 0]}
      >
        {" "}
        <meshStandardMaterial {...textureProps} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/Character.glb");
