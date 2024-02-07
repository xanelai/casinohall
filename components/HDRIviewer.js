import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

const HDRIViewer = ({ hdriImagePath }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        // Crear una escena
        const scene = new THREE.Scene();

        // Crear una cámara
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.set(0, 0, 1);

        // Crear un renderizador
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        // Cargar la imagen HDRI con diferentes tipos de datos
        new RGBELoader()
            .setDataType(THREE.FloatType) // Intenta con FloatType
            .load(hdriImagePath, function (hdrTexture) {
                const pmremGenerator = new THREE.PMREMGenerator(renderer);
                const envMap = pmremGenerator.fromEquirectangular(hdrTexture).texture;

                // Configurar el entorno de la escena
                scene.background = envMap;
                scene.environment = envMap;

                // Renderizar la escena
                function render() {
                    renderer.render(scene, camera);
                }

                render();
            });

        // Ajustar el tamaño del renderizador cuando cambie el tamaño de la ventana
        // window.addEventListener('resize', function () {
        //     camera.aspect = container.clientWidth / container.clientHeight;
        //     camera.updateProjectionMatrix();
        //     renderer.setSize(container.clientWidth, container.clientHeight);
        //     render();
        // });

        const handleResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
            render();
        };

        // Limpiar los recursos al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize); // Remueve el listener del evento 'resize'
            container.removeChild(renderer.domElement);
        };

        container.appendChild(renderer.domElement);


    }, [hdriImagePath]);

    return (
        <>
            <div ref={containerRef} />
        </>

    );
};

export default HDRIViewer;