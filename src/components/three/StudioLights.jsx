

import { Environment, Lightformer } from "@react-three/drei"


const StudioLights = () => {
  return (
    <group name="lights">
        <Environment resolution={256}>
            <group>
                
            <Lightformer
            form='rect'
            intensity={10}
            position={[10,5,-5]}
            scale={10}
            rotation-y={Math.PI/2}
            
            />
            <Lightformer
            form='rect'
            intensity={10}
            position={[10,0,-5]}
            scale={10}
            rotation-y={Math.PI/2}
            
            />
            </group>
        </Environment>
        <spotLight
        position={[-2,10,5]}
        angle={0.15}
        decya={0}
        intensity={Math.PI *0.2}
        />
    </group>
  )
}

export default StudioLights