import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Text, Stars, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Skill } from '../../types';
import { skillsData } from '../../data/skills';

const SkillNode = ({ skill, angle, radius, onClick }: { skill: Skill, angle: number, radius: number, onClick: (skill: Skill) => void }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  
  // Base position
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  
  // Random offset for orbit height variation
  const yOffset = useMemo(() => (Math.random() - 0.5) * 4, []);

  // Use memo for material
  const material = useMemo(() => {
    let color = '#3b82f6';
    if (skill.category === 'Frontend') color = '#06b6d4';
    if (skill.category === 'AI/Data') color = '#8b5cf6';
    
    return new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: hovered ? 2 : 0.5,
      roughness: 0.2,
      metalness: 0.8,
    });
  }, [skill.category, hovered]);

  useFrame((state: any) => {
    if (meshRef.current) {
      // Orbiting
      const time = state.clock.getElapsedTime();
      const currentAngle = angle + time * 0.2 * (2 / radius); // Slower for outer planets
      meshRef.current.position.x = Math.cos(currentAngle) * radius;
      meshRef.current.position.z = Math.sin(currentAngle) * radius;
      meshRef.current.position.y = Math.sin(time + angle) * 0.5 + yOffset;
      
      meshRef.current.rotation.y += 0.01;
    }
    if (textRef.current && meshRef.current) {
      textRef.current.position.copy(meshRef.current.position);
      textRef.current.position.y += 1.2;
    }
  });

  return (
    <group>
      <Sphere 
        ref={meshRef} 
        args={[0.6, 32, 32]} 
        position={[x, yOffset, z]}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'default';
        }}
        onClick={(e: any) => {
          e.stopPropagation();
          onClick(skill);
        }}
      >
        <primitive object={material} attach="material" />
      </Sphere>
      <Text
        ref={textRef}
        position={[x, yOffset + 1.2, z]}
        fontSize={0.5}
        color={hovered ? "#ffffff" : "#cccccc"}
        anchorX="center"
        anchorY="middle"
      >
        {skill.name}
      </Text>
    </group>
  );
};

const SkillsGalaxyScene = ({ onSkillClick }: { onSkillClick: (skill: Skill) => void }) => {
  const centralCoreRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (centralCoreRef.current) {
      centralCoreRef.current.rotation.y += 0.005;
      centralCoreRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[0, 0, 0]} intensity={5} color="#3b82f6" distance={20} />

      {/* Central AI Core */}
      <Sphere ref={centralCoreRef} args={[2, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#030712" emissive="#3b82f6" emissiveIntensity={0.8} wireframe />
      </Sphere>

      {/* Orbits and Skill Nodes */}
      {skillsData.map((skill, index) => {
        // Distribute in concentric circles
        const circleIndex = Math.floor(index / 4);
        const radius = 5 + circleIndex * 3.5;
        const itemsInCircle = circleIndex === 0 ? 4 : 6;
        const angle = (index % itemsInCircle) * ((Math.PI * 2) / itemsInCircle);

        return (
          <SkillNode
            key={skill.name}
            skill={skill}
            angle={angle}
            radius={radius}
            onClick={onSkillClick}
          />
        );
      })}

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <OrbitControls 
        enablePan={false} 
        minDistance={5} 
        maxDistance={30}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </group>
  );
};

export default React.memo(SkillsGalaxyScene);
