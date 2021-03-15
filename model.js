import * as THREE from "/build/three.module.js";
import { OrbitControls } from "/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "./jsm/loaders/GLTFLoader.js";

var container = document.querySelector('.model');

var height = 500;
var width = 600;

var controls, model;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
	75,
	width / height,
	0.5,
	1000
);

camera.position.z = 10;

var renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});

renderer.setSize(width, height);

container.appendChild(renderer.domElement);

//entire object
var hlight = new THREE.AmbientLight (0xd22222,100);
scene.add(hlight);

//top light
var directionalLight = new THREE.DirectionalLight(0xdffffff,100);
directionalLight.position.set(0,1,0);
directionalLight.castShadow = true;
scene.add(directionalLight);

//top right hint
var light = new THREE.PointLight(0xd22222,10);
light.position.set(0,300,500);
scene.add(light);

//back right
var light2 = new THREE.PointLight(0xd22222,10);
light2.position.set(500,100,0);
scene.add(light2);

//back bottom
var light3 = new THREE.PointLight(0xd22222,10);
light3.position.set(0,100,-500);
scene.add(light3);

//top left hint
var light4 = new THREE.PointLight(0xd22222,10);
light4.position.set(-500,300,500);
scene.add(light4);

controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', render);
controls.enableZoom = true;
controls.enablePan = false;
controls.enableRotate = true;

window.addEventListener('resize', function(){
	var Width = container.clientWidth;
    var Height = container.clientHeight;
    renderer.setSize(Width, Height);
    camera.aspect = Width / Height;
    camera.updateProjectionMatrix();
    // controls.handleResize();
})

console.log('loading');

const loader = new GLTFLoader();

loader.load(
	"./models/f35.gltf",
	function (gltf) {
		model = gltf.scene;

		scene.add(gltf.scene);

		renderer.setClearColor( 0x000000, 0 );

		var newDir = new THREE.Vector3(-1, -.5, 1);

		model.rotateOnWorldAxis(newDir, THREE.Math.degToRad(45));

		var pos = new THREE.Vector3();
		pos.addVectors(newDir, model.position);
		model.lookAt(pos);

		// var plane = new THREE.GridHelper(100, 10);
  		// scene.add(plane);

		//   var worldAxis = new THREE.AxesHelper(20);
  		// model.add(worldAxis);

		  console.log('loading finished');

		renderer.outputEncoding = THREE.sRGBEncoding;

		document.querySelector('.loading').remove();

		gameLoop();
	},
	undefined,
	function (error) {
		console.error(error);
	}
);

function update(){
	model.rotation.y += 0.01;
	controls.update();
}

function render(){
	renderer.render(scene,camera);
}

var gameLoop = function(){
	requestAnimationFrame(gameLoop);
	update();
	render();
}