import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Model({
  wireframe = false,
  speed = 0.01,
  rotationX = 0,
  rotationY = 0,
  setView = null,
}) {
  const group = useRef();
  // const { nodes, materials } = useGLTF(
  //   "/~mr754/3dapp/assignment/coke_with_texture.gltf"
  // );
  const { nodes, materials } = useGLTF("/coke_with_texture.gltf");

  useFrame(() => {
    if (group.current) {
      if (setView) {
        group.current.rotation.y = setView;
      } else {
        group.current.rotation.y += speed;
      }
      group.current.rotation.x = rotationX;
    }
  });

  // Set rotationY when not controlled by setView
  useEffect(() => {
    if (!setView) {
      group.current.rotation.y = rotationY;
    }
  }, [rotationY, setView]);

  // Update materials for wireframe changes
  useEffect(() => {
    if (materials) {
      Object.values(materials).forEach((material) => {
        material.wireframe = wireframe;
      });
    }
  }, [wireframe, materials]);

  return (
    <group ref={group} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -0.5]} scale={0.3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["coke-can-opener"].geometry}
          material={materials.Metal}
          position={[0, -0.021, -11.642]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["coke-can-opener"].geometry}
          material={materials.Metal}
          position={[0, -0.021, -11.642]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials["Can Body"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials["Can Body.ImgTexture"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/coke_with_texture.gltf");
// useGLTF.preload("/~mr754/3dapp/assignment/coke_with_texture.gltf");
