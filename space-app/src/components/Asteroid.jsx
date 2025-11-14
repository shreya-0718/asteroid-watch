import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function AsteroidMesh({ diameter, hazard }) {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.y += 0.005;
    mesh.current.rotation.x += 0.002;
    mesh.current.rotation.z += 0.04;
  });

  const color = hazard ? 'orange' : 'gray';
  const scale = Math.min(Math.max(diameter / 2, 0.5), 2);

  return (
    <mesh ref={mesh} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color={color} wireframe={false} />
    </mesh>
  );
}

export default function Asteroid({ diameter, hazard }) {
  return (
    <Canvas style={{ height: '200px' }} className="w-full">
      <directionalLight position={[-1, 1, 1]} />
      <AsteroidMesh diameter={diameter} hazard={hazard} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}