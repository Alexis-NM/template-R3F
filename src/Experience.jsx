import { OrbitControls } from "@react-three/drei";

function Experience() {
  return (
    <>
      <OrbitControls />
      <mesh scale={2}>
        <boxGeometry />
        <meshBasicMaterial color="hotpink" wireframe />
      </mesh>
    </>
  );
}

export default Experience;
