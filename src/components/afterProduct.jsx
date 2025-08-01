import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import './afterProduct.css'

const MODEL_PATH = '/cosmetic_jar/scenel.glb';
const MODEL_SCALE = 12;
const MODEL_HEIGHT = 1.5;
const AUTO_SPIN_SPEED = 1;
const IDLE_THRESHOLD = 1000;
const SMOOTHING = 0.1;
const MAX_PITCH = Math.PI / 2;

function normalizeAngle(a) {
    return ((a + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI;
}

function ModelRotator({ targetRef, lastMoveRef }) {
    const group = useRef();
    const { scene } = useGLTF(MODEL_PATH);
    const current = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const box = new THREE.Box3().setFromObject(scene);
        const center = box.getCenter(new THREE.Vector3());
        scene.position.sub(center);
        scene.scale.setScalar(MODEL_SCALE);
        scene.position.y = MODEL_HEIGHT;
        scene.traverse(obj => {
            if (obj.isMesh) obj.castShadow = obj.receiveShadow = true;
        });
    }, [scene]);

    useFrame((_, delta) => {
        if (Date.now() - lastMoveRef.current > IDLE_THRESHOLD) {
            targetRef.current.y += AUTO_SPIN_SPEED * delta;
        }
        targetRef.current.y = normalizeAngle(targetRef.current.y);
        targetRef.current.x = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, targetRef.current.x));

        const diffY = normalizeAngle(targetRef.current.y - current.current.y);
        const diffX = targetRef.current.x - current.current.x;

        current.current.y += diffY * SMOOTHING;
        current.current.x += diffX * SMOOTHING;

        if (group.current) {
            group.current.rotation.y = current.current.y;
            group.current.rotation.x = current.current.x;
        }
    });

    return <primitive ref={group} object={scene} />;
}

export default function ThreeModelViewer() {
    const targetRef = useRef({ x: 0, y: 0 });
    const lastMoveRef = useRef(Date.now());

    useEffect(() => {
        const onMove = e => {
            const xNorm = (e.clientX / window.innerWidth) * 2 - 1;
            const yNorm = 1 - (e.clientY / window.innerHeight) * 2;
            targetRef.current.y = xNorm * (Math.PI / 2);
            targetRef.current.x = -1 * yNorm * MAX_PITCH;
            lastMoveRef.current = Date.now();
        };
        window.addEventListener('mousemove', onMove, { passive: true });
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    return (
        <div
            className="w-full booo h-full overflow-hidden flex justify-center items-center"
        >
            <Canvas
                shadows
                camera={{ position: [1, 1.5, 4], fov: 50 }}
                onCreated={({ camera }) => camera.lookAt(0, 1.5, 0)}
                className="w-full h-full flex justify-center items-center m-auto contin"
            >
                <directionalLight
                    castShadow
                    intensity={2}
                    position={[-1, 5, 3]}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-bias={-0.001}
                />
                <ambientLight intensity={1.5} />
                <ModelRotator targetRef={targetRef} lastMoveRef={lastMoveRef} />
                {/* <ContactShadows
                    position={[0, -0.001, 0]}
                    opacity={0.4}
                    scale={10}
                    blur={2.5}
                    far={2}
                    resolution={1024}
                /> */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                    <planeGeometry args={[10, 10]} />
                    <shadowMaterial opacity={0.5} />
                </mesh>
            </Canvas>
        </div>
    );
}
