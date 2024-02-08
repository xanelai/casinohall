
import React, { useEffect, useRef, useState } from 'react'
import Scene from "@/components/Scene";

import { CubeTextureLoader } from 'three';





export default function Home() {
  const [envMap, setEnvMap] = useState(null);
  useEffect(() => {
    const loadEnvMap = async () => {
      const map = await new CubeTextureLoader().loadAsync(['/large_corridor_4k.hdr']);
      setEnvMap(map);
    };
    loadEnvMap();
  }, []);

  return (
    <>
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <Scene >
          
          
        </Scene>
      </div>
    </>
  );
}


