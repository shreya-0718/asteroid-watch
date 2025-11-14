import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AsteroidMesh({ diameter, hazard }) {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
      mesh.current.rotation.x += 0.002;
    }
  });

  useEffect(() => {
    console.log(`New asteroid mesh: diameter=${diameter}, hazard=${hazard}`);
  }, [diameter, hazard]);

  const color = hazard ? 'orange' : 'gray';
  const scale = Math.min(Math.max(diameter / 2, 0.5), 2);

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1, 0), [diameter]);
  const material = useMemo(() => new THREE.MeshStandardMaterial({ color }), [color]);

  return (
    <mesh ref={mesh} scale={scale} geometry={geometry} material={material} />
  );
}

export default function Asteroid({ diameter, hazard }) {
  return (
    <Canvas style={{ height: '200px' }} className="w-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <AsteroidMesh diameter={diameter} hazard={hazard} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}