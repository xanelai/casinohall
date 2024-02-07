import React, { useRef } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Environment, Stats, OrbitControls, } from '@react-three/drei'



export default function Scene() {
  return <Canvas camera={{ position: [-0.5, 1, 2] }}>
    <Environment files={'/sample_1280×853.hdr'} background blur={0.0}/>
    <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
    <OrbitControls target={[0, 1, 0]} autoRotate />
      <axesHelper args={[5]} />
      <Stats />

    <RotatingCube />

    </Canvas>

}


function RotatingCube() {
    const cubeRef = useRef();
  
    useFrame(() => {
      // Rotar el cubo en el eje Y
      cubeRef.current.rotation.y += 0.01;
    });
  
    return (
      <mesh ref={cubeRef} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="red" />
      </mesh>
    );
  }