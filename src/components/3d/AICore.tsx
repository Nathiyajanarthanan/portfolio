import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

interface AICoreProps {
  mousePosition: { x: number; y: number };
}

const AICore: React.FC<AICoreProps> = ({ mousePosition }) => {
  const coreRef = useRef<THREE.Mesh>(null);
  const outerSphereRef = useRef<THREE.Mesh>(null);

  // Use memo for materials to prevent re-creation
  const coreMaterial = useMemo(
    () => <MeshDistortMaterial color="#06b6d4" attach="material" distort={0.4} speed={2} roughness={0.2} metalness={0.8} />,
    []
  );

  const outerMaterial = useMemo(
    () => <MeshDistortMaterial color="#3b82f6" attach="material" distort={0.2} speed={1.5} opacity={0.3} transparent roughness={0.1} metalness={1} />,
    []
  );
  useFrame((state) => {
    if (coreRef.current && outerSphereRef.current) {
      coreRef.current.rotation.y += 0.01;
      coreRef.current.rotation.x += 0.005;
      
      outerSphereRef.current.rotation.y -= 0.005;
      outerSphereRef.current.rotation.x -= 0.002;

      // Mouse reactivity
      const targetX = (mousePosition.x / window.innerWidth) * 2 - 1;
      const targetY = -(mousePosition.y / window.innerHeight) * 2 + 1;

      coreRef.current.position.x += (targetX * 0.5 - coreRef.current.position.x) * 0.05;
      coreRef.current.position.y += (targetY * 0.5 - coreRef.current.position.y) * 0.05;
      
      outerSphereRef.current.position.x += (targetX * 0.5 - outerSphereRef.current.position.x) * 0.05;
      outerSphereRef.current.position.y += (targetY * 0.5 - outerSphereRef.current.position.y) * 0.05;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#3b82f6" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[0, 0, 0]} intensity={2} color="#06b6d4" distance={10} />

      <Sphere ref={coreRef} args={[1.5, 64, 64]}>
        {coreMaterial}
      </Sphere>

      <Sphere ref={outerSphereRef} args={[2.2, 64, 64]}>
        {outerMaterial}
      </Sphere>
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
};

export default React.memo(AICore);
