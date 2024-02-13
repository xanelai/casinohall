import React, { useRef, Suspense, useEffect } from 'react'
import { Canvas, useLoader, useFrame, useThree, } from '@react-three/fiber';
import { Environment, Stats, OrbitControls, Plane, SpotLight } from '@react-three/drei'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';



function ModeloFBX(props) {
    const { position, model } = props;
    const fbx = useLoader(FBXLoader, '/model.fbx'); // Ruta al archivo FBX
    useFrame(() => {
        // Actualizar la posición del modelo FBX en cada fotograma
        fbx.position.set(props.position[0], props.position[1], props.position[2]);
    });
    fbx.receiveShadow = true;

    return <primitive object={fbx} />;
}

function ModeloFBX2(props) {
    const { position, model } = props;
    const fbx = useLoader(FBXLoader, '/model2.fbx'); // Ruta al archivo FBX
    useFrame(() => {
        // Actualizar la posición del modelo FBX en cada fotograma
        fbx.position.set(props.position[0], props.position[1], props.position[2]);
    });
    fbx.receiveShadow = true;

    return <primitive object={fbx} />;
}





export default function Scene() {
    return <Canvas  style={{ background: 'black' }}
        dpr={[1, 2]}
        camera={{ position: [0, 1, 7], fov: 95, near: 1, far: 100 }}
        shadows
        gl={{ antialias: true }}

    >

        <ambientLight intensity={1} />
        <directionalLight position={[0, 5, 5]} intensity={1} castShadow />

        <ModeloFBX position={[0, 0, 0]} />
        <ModeloFBX2 position={[-3, 0, 0]} />

        {/* Dibujar un suelo */}
        <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <shadowMaterial attach="material" opacity={0.9} />
            <meshBasicMaterial attach="material" color="#b71c1c" />
        </Plane>
        <SpotLight position={[2, 10, 0]} intensity={60} angle={Math.PI / 5} penumbra={0} castShadow />
        <SpotLight position={[0, 10, 0]} intensity={60} angle={Math.PI / 5} penumbra={0} castShadow />
        <SpotLight position={[-2, 10, 0]} intensity={60} angle={Math.PI / 5} penumbra={0} castShadow />

        <OrbitControls />





        {/* <axesHelper args={[5]} /> */}
        <Stats />

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