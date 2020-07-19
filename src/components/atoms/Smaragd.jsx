import React from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const Smaragd = (props) => {
  const ref = React.useRef();

  React.useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(40, 1, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    var light = new THREE.AmbientLight(0x404040, 0.5);
    var plight = new THREE.PointLight(0x00ff00, 1, 200);
    plight.position.set(-10, 10, 50);
    renderer.setSize(150, 150);
    ref.current.appendChild(renderer.domElement);
    var data;
    var loader = new GLTFLoader();

    scene.add(light);
    scene.add(plight);
    loader.load(
      "smaragd.gltf",
      function (gltf) {
        data = gltf;
        scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
    camera.position.z = 3;
    var animate = function () {
      requestAnimationFrame(animate);
      if (data) {
        data.scene.traverse(function (object) {
          object.rotation.y += 0.001;
        });
      }
      renderer.render(scene, camera);
    };
    animate();
    renderer.render(scene, camera);
  }, []);

  return <div ref={ref} {...props}></div>;
};
