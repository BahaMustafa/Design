import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Project3D() {
  return (
    <div className="project-3d">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/* Replace with real 3D model */}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="lightgray" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Project3D;
