import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AsciiRenderer } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  Glitch,
  Noise,
} from "@react-three/postprocessing";

const Planet = () => {
  const texture = new THREE.TextureLoader().load("/textures/bw-globe.jpg");
  const aoMap = new THREE.TextureLoader().load("/textures/bw-globe-ao.jpg");

  const meshRef = useRef(null);

  useFrame((state, delta) => (meshRef.current.rotation.y += delta / 1.75));

  const [isAnimating, setIsAnimating] = useState(false);
  const originalPositions = useRef([]);
  const randomPositions = useRef([]);
  const interpolationFactor = useRef(0);
  const resetting = useRef(false);
  const [inverted, setInverted] = useState(false);

  // Helper function to initialize original and random positions
  const initializePositions = () => {
    const sphereGeometry = meshRef.current.geometry;
    const positionAttr = sphereGeometry.attributes.position;
    const positions = positionAttr.array;

    if (originalPositions.current.length === 0) {
      for (let i = 0; i < positions.length; i++) {
        originalPositions.current[i] = positions[i]; // Save original position
        randomPositions.current[i] = positions[i] + (Math.random() - 0.5) * 0.5; // Generate random position without deslocation
      }
    }
  };

  // Click handler to randomize vertices
  const handleClick = () => {
    if (!isAnimating) {
      initializePositions();

      setIsAnimating(true);
      resetting.current = false;
      interpolationFactor.current = 0;

      // After 1 seconds, reset to original positions
      setTimeout(() => {
        setInverted((prev) => !prev);
        resetting.current = true;
        interpolationFactor.current = 0; // Reset interpolation factor for smooth reset
        setIsAnimating(true); // Trigger the reset animation
      }, 1000);
    }
  };

  // Animation loop using useFrame
  useFrame(() => {
    if (!isAnimating) return;

    const sphereGeometry = meshRef.current.geometry;
    const positionAttr = sphereGeometry.attributes.position;
    const positions = positionAttr.array;

    interpolationFactor.current += 0.075; // Adjust this for speed
    if (interpolationFactor.current >= 1) {
      interpolationFactor.current = 1;
      setIsAnimating(false); // Stop animation after reaching target
    }

    // Interpolate between random and original positions
    for (let i = 0; i < positions.length; i++) {
      positions[i] = THREE.MathUtils.lerp(
        positions[i],
        resetting.current
          ? originalPositions.current[i]
          : randomPositions.current[i],
        interpolationFactor.current
      );
    }

    positionAttr.needsUpdate = true;
  });

  useEffect(() => {
    console.log(interpolationFactor.current);
  }, [interpolationFactor]);

  return (
    <mesh
      ref={meshRef}
      onClick={handleClick}
      onPointerOver={(e) => (document.body.style.cursor = "pointer")}
      onPointerOut={(e) => (document.body.style.cursor = "auto")}
    >
      <sphereGeometry args={[2.75, 32, 32]} />
      <meshStandardMaterial
        transparent
        metalness={1}
        map={texture}
        alphaMap={aoMap}
        flatShading
      />

      <AsciiRenderer
        invert={false}
        bgColor="transparent"
        fgColor={inverted ? "#FA2120" : "#4EF531"}
        resolution={0.18}
      />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.1}
          luminanceSmoothing={0.1}
          height={
            isAnimating ? 25 + (300 - 25) * interpolationFactor.current : 300
          }
          intensity={interpolationFactor.current + 0.1}
        />
        {isAnimating && <Noise opacity={0.0001} />}
      </EffectComposer>
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
    </Canvas>
  );
}
