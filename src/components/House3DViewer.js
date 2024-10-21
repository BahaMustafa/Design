import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

function House3DViewer() {
  // Load the GLB model
  const { scene } = useGLTF('/modern_luxury_villa_house_building_design.glb');

  // Apply fallback material if materials are using the unsupported KHR extension
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          if (
            child.material &&
            child.material.extensions &&
            child.material.extensions['KHR_materials_pbrSpecularGlossiness']
          ) {
            console.warn('Replacing unsupported material with standard PBR material');
            child.material = new MeshStandardMaterial({
              color: child.material.color || 'white',
              metalness: 0.5,
              roughness: 0.5,
            });
          }
        }
      });
    }
  }, [scene]);

  return (
    <Canvas
      camera={{ position: [10, 10, 15], fov: 50 }}
      style={{ height: '600px', width: '100%' }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      {scene && <primitive object={scene} scale={0.05} />} {/* Adjust scale if needed */}
      <OrbitControls enableZoom={true} enableRotate={true} enablePan={true} />
    </Canvas>
  );
}

export default House3DViewer;
