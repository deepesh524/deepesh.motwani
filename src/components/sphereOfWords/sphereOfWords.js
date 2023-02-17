import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, TrackballControls } from '@react-three/drei'
import randomWord from 'random-words'
import './sphereOfWords.css';

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': true }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? 'white' : 'rgb(0,225,255)'), 0.1)
  })
  return <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps} children={children} />
}


export default function SphereOfWords(props) {

    var data = props.data;
    function Cloud({ count = 2, radius = 20 }) {
        // Create a count x count random words with spherical distribution
        const words = useMemo(() => {
        var temp = []
        const spherical = new THREE.Spherical()
        if(data){
            const phiSpan = Math.PI  / (count + 1)
            const thetaSpan  = (Math.PI *2) / count
            var x = 0;
            for (let i = 1; i < count + 1; i++){
                for (let j = 0; j < count; j++){
                    temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), data[x].value])
                    x+=1;
                } 
            }
        }
        else{
            const phiSpan = Math.PI / (count + 1)
            const thetaSpan = (Math.PI * 2) / count
            for (let i = 1; i < count + 1; i++)
                for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), randomWord()])
        }
        return temp
        }, [count, radius])

        return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
    }

    return (
        <Canvas style={{height:'50vh',width:'50vw'}} dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
            <fog attach="fog" args={['#202025', 0, 80]} />
            <Cloud count={4} radius={24} />
            <OrbitControls autoRotate={true} enableZoom={true} zoomSpeed={0.3} />
        </Canvas>
    )
}
