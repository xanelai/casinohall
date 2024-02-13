import React, { useRef, Suspense, useEffect } from 'react'
import { Canvas, useLoader, useFrame, useThree, } from '@react-three/fiber';
import { Environment, Stats, OrbitControls, Plane, SpotLight } from '@react-three/drei'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';



function CarpetBX(props) {
    const { position, model } = props;
    const fbx = useLoader(FBXLoader, '/carpet.fbx'); // Ruta al archivo FBX
    useFrame(() => {
        // Actualizar la posición del modelo FBX en cada fotograma
        fbx.position.set(props.position[0], props.position[1], props.position[2]);
    });
    fbx.receiveShadow = true;

    return <primitive object={fbx} />;
}


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

function ModeloFBX3(props) {
    const { position, model } = props;
    const fbx = useLoader(FBXLoader, '/model3.fbx'); // Ruta al archivo FBX
    useFrame(() => {
        // Actualizar la posición del modelo FBX en cada fotograma
        fbx.position.set(props.position[0], props.position[1], props.position[2]);
    });
    fbx.receiveShadow = true;

    return <primitive object={fbx} />;
}

function Wall({ position }) {
    return (
        <Plane args={[100, 100]} position={position} rotation={[0, Math.PI / 120, 0]} receiveShadow>
            <shadowMaterial attach="material" opacity={0.9} />
            <meshBasicMaterial attach="material" color="#4a148c" />
        </Plane>
    );
}



export default function Scene() {
    const cameraRef = useRef();

    // Manejar los cambios de cuadro para detectar movimientos de la cámara


    return <Canvas style={{ background: 'black' }}
        dpr={[1, 2]}
        frameloop="demand"
        shadows
        gl={{ antialias: true }}

    >
        <perspectiveCamera ref={cameraRef} position={[0, 0, 5]} />

 
        <directionalLight position={[0, 4, 5]} intensity={6} castShadow />

        <ModeloFBX position={[0, 0, 0]} />
        <ModeloFBX2 position={[-3, 0, 0]} />
        <ModeloFBX3 position={[3, 0, -2]} />

        {/* Dibujar un suelo */}
        <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <shadowMaterial attach="material" opacity={0.9} />
            <meshBasicMaterial attach="material" color="#b71c1c" />
        </Plane>

        <CarpetBX position={[-30, 0, 20]} />
        
        <SpotLight position={[2, 10, 0]} intensity={60} angle={Math.PI / 5} penumbra={70} />
        <SpotLight position={[0, 10, 0]} intensity={60} angle={Math.PI / 5} penumbra={0} />
        <SpotLight position={[-2, 10, 0]} intensity={500} angle={Math.PI / 5} penumbra={0} />
        <Wall position={[0, 5, -2.5]} />

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