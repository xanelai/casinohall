import React, { useRef } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Environment, Stats, OrbitControls, } from '@react-three/drei'

// load mesh in side left

export default function Scene() {
    const cameraRef = useRef()
    return <Canvas
        dpr={[1, 2]}
        camera={{ position: [-120, 0, 20], fov: 95 }}
        shadows
        gl={{ antialias: true, toneMapping: 'ReinhardToneMapping', gammaOutput: true }}
    >
        <Environment files={'/hall.hdr'} background />
        <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
        {/* <OrbitControls target={[0, 1, 0]} /> */}
        <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
                zoomSpeed={0.5}
                panSpeed={0.5}
                rotateSpeed={0.5}
                target={[0, 0, 0]}
                args={[cameraRef.current]}
            />
        {/* <axesHelper args={[5]} /> */}
        <Stats />
        {/* <RotatingCube /> */}





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