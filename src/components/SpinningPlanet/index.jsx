import * as THREE from "three";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AsciiRenderer } from "@react-three/drei";

const Planet = () => {
  const texture = new THREE.TextureLoader().load("/textures/bw-globe.jpg");
  const aoMap = new THREE.TextureLoader().load("/textures/bw-globe-ao.jpg");

  const meshRef = useRef(null);

  useFrame((state, delta) => (meshRef.current.rotation.y += delta / 1.5));

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.75, 32, 32]} />
      <meshStandardMaterial
        transparent
        metalness={1}
        map={texture}
        alphaMap={aoMap}
        flatShading
      />
    </mesh>
  );
};

export default function SpinningPlanet({ props }) {
  return (
    <Canvas gl={{ alpha: true, antialias: true }}>
      <spotLight
        position={[10, 10, 100]}
        angle={1}
        decay={-10}
        intensity={Math.PI}
      />
      <Planet />
      <AsciiRenderer
        invert={false}
        bgColor="transparent"
        fgColor="#4EF531"
        resolution={0.18}
      />
    </Canvas>
  );
}
