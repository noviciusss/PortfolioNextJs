// Stars.tsx
'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';

interface StarProps {
    positions: Float32Array;
}

const Stars: React.FC<StarProps> = ({ positions }) => {
    const ref = useRef<THREE.Points>(null);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={positions}
                stride={3}
                frustumCulled
            >
                <PointMaterial
                    transparent
                    color='#f272c8'
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas: React.FC = () => {
    // Generate the random positions on the server side
    const positions = new Float32Array(5000);
    for (let i = 0; i < positions.length; i++) {
        positions[i] = (Math.random() - 0.5) * 2.4;
    }

    return (
        <div className='w-full absolute inset-0 z-[-1] bg-dark'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars positions={positions} />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
