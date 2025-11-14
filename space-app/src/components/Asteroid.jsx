import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function AsteroidMesh({ diameter, hazard }) {
  const mesh = useRef();
  const color = hazard ? 'orange' : 'gray';
  const scale = Math.min(Math.max(diameter / 2, 0.5), 2);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
      mesh.current.rotation.x += 0.002;
    }
  });

  useEffect(() => {
    if (mesh.current) {
      mesh.current.material.color.set(color);
      mesh.current.scale.setScalar(scale);
    }
    console.log("asteroid mounted!");
  }, [diameter, hazard]);

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function Asteroid({ diameter, hazard }) {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <AsteroidMesh diameter={diameter} hazard={hazard} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}