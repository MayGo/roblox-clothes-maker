import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Character } from "./Character";

function CameraRig(props) {
  const ref = useRef();

  useFrame(() => ref.current.updateMatrixWorld());
  return <perspectiveCamera ref={ref} {...props} />;
}

export function Scene() {
  return (
    <Canvas>
      <color attach="background" args={["#111a21"]} />
      <CameraRig position={[0, 1.6, 5]} fov={70} />
      <gridHelper />
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Character position={[0, 3, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
