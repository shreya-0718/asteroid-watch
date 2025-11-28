import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function AsteroidMesh({ diameter, hazard , speed }) {
  const mesh = useRef();
  const color = hazard ? 'red' : 'gray';
  const scale = Math.min(Math.max(diameter, 0.01), 0.4);
  const exaggeration = 3;
  const rotation_speed = Math.min(Math.max(speed / 10000, 0.1), 5);


  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01*rotation_speed;
      mesh.current.rotation.x += 0.02*rotation_speed;
    }
  });

  useEffect(() => {
    if (mesh.current) {
      mesh.current.material.color.set(color);
      mesh.current.scale.setScalar(scale*exaggeration);
    }
  }, [diameter, hazard]);

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[2, 0]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function Asteroid({ diameter, hazard , speed }) {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <AsteroidMesh diameter={diameter} hazard={hazard} speed={speed} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}