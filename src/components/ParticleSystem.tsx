import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const AtomicStructure = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const cubeRef = useRef<THREE.Mesh>(null!);
  const sphere1Ref = useRef<THREE.Mesh>(null!);
  const sphere2Ref = useRef<THREE.Mesh>(null!);
  const sphere3Ref = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    // Rotate the entire structure
    groupRef.current.rotation.y += delta * 0.1;

    // Rotate the cube
    cubeRef.current.rotation.x += delta * 0.5;
    cubeRef.current.rotation.y += delta * 0.5;

    // Orbit spheres
    sphere1Ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.8) * 2;
    sphere1Ref.current.position.z = Math.cos(state.clock.elapsedTime * 0.8) * 2;

    sphere2Ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 2;
    sphere2Ref.current.position.z = Math.cos(state.clock.elapsedTime * 1.2) * 2;

    sphere3Ref.current.position.x = Math.sin(state.clock.elapsedTime * 1.5) * 2;
    sphere3Ref.current.position.y = Math.cos(state.clock.elapsedTime * 1.5) * 2;
  });

  return (
    <group ref={groupRef}>
      <mesh ref={cubeRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#c88164" wireframe />
      </mesh>
      <mesh ref={sphere1Ref}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color="#f0b08c" wireframe />
      </mesh>
      <mesh ref={sphere2Ref}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color="#f0b08c" wireframe />
      </mesh>
      <mesh ref={sphere3Ref}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color="#f0b08c" wireframe />
      </mesh>
    </group>
  );
};

const ParticleSystem = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <AtomicStructure />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default ParticleSystem;
