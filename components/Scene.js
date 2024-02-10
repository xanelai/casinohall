import React, { useRef, Suspense, useEffect } from 'react'
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { Environment, Stats, OrbitControls, } from '@react-three/drei'




export default function Scene() {
    return <Canvas
        dpr={[1, 2]}
        camera={{  fov: 95, near: 0.1, far: 1000}}
        shadows
        gl={{ antialias: true, toneMapping: 'ReinhardToneMapping', gammaOutput: true }}
    >
        <Environment files={'/hall2.hdr'} background />
        <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
        <OrbitControls />

        {/* <axesHelper args={[5]} /> */}
        <Stats />
        <RotatingCube />






    </Canvas>

}


function RotatingCube() {
    const cubeRef = useRef();


    return (
        <mesh ref={cubeRef} position={[0, 0, 10]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="red" />
        </mesh>
    );
}