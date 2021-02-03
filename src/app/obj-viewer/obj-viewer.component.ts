import { Component, OnInit, HostListener } from '@angular/core';
import { Model3D } from '../data/projects/models/model3d';

import * as THREE from            'three';
import { OrbitControls } from     'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { FBXLoader } from        "three/examples/jsm/loaders/FBXLoader.js";

@Component({
  selector: 'app-obj-viewer',
  templateUrl: './obj-viewer.component.html',
  styleUrls: ['./obj-viewer.component.scss']
})
export class ObjViewerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model;   

  cameraPersp;
  cameraOrtho; 
  currentCamera;

  control;
  scene;
  renderer; 
  orbit;

  hlight;
  directionalLight;
  object;
  tipsHidden = false;
  isWireframe = false;

  previewModel (model)
  {
    this.model = model;

    if(this.model.cameraX == null)
      this.model.cameraX = 10;
    
    if(this.model.cameraY == null)
      this.model.cameraY = 5;
    
    if(this.model.cameraZ == null)
      this.model.cameraZ = 10;
    
    if(this.model.ambientLightPower == null)
      this.model.ambientLightPower = 1;
    
    if(this.model.this.directionalLightPower == null)
      this.model.this.directionalLightPower = 1;

    this.initPreviewScene(this.model.loadSrc, this.model.cameraX, this.model.cameraY, this.model.cameraZ, this.model.ambientLightPower, this.model.this.directionalLightPower);     
  }

  initPreviewScene(loadSrc, cameraX, cameraY, cameraZ, ambientLightPower, directionLightPower) {
      /*Camera setup*/
      const aspect = window.innerWidth / window.innerHeight;

      this.cameraPersp = new THREE.PerspectiveCamera( 50, aspect, 0.01, 30000 );
      this.cameraOrtho = new THREE.OrthographicCamera( - 600 * aspect, 600 * aspect, 600, - 600, 0.01, 30000 );
      this.currentCamera = this.cameraPersp;

      this.currentCamera.position.set( cameraX, cameraY, cameraZ );
      this.currentCamera.lookAt( 0, 200, 0 );

      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0x555555)

      /*******
      Lighting
      *******/
      this.hlight = new THREE.AmbientLight(0x404040, ambientLightPower);
      this.scene.add(this.hlight)

      this.directionalLight = new THREE.DirectionalLight( 0xffffff, directionLightPower );
      this.directionalLight.position.set( 1, 1, 1 );
      this.directionalLight.target.position.set( 0, 0, 0 );
      this.directionalLight.castShadow = true;
      this.scene.add(this.directionalLight)

      /********
      Rendering
      ********/
      this.renderer = new THREE.WebGLRenderer({antialias: true});
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(this.renderer.domElement)

      /*Axes*/
      var axesHelper = new THREE.AxesHelper( 10 );
      this.scene.add( axesHelper );

      //(size, divisions)
      var gridHelper = new THREE.GridHelper( 10, 10 );
      this.scene.add( gridHelper );

      /*******
      controls
      *******/
      this.orbit = new OrbitControls( this.currentCamera, this.renderer.domElement );
      this.orbit.update();
      this.orbit.addEventListener( 'change', this.render );

      this.control = new TransformControls( this.currentCamera, this.renderer.domElement );
      this.control.addEventListener( 'change', this.render );

      this.control.addEventListener( 'dragging-changed', function ( event ) {

          this.orbit.enabled = ! event.value;

      } );

      let loader = new FBXLoader()
      loader.load(loadSrc, function(fbx) {
          //this.scene.add( fbx );
          this.object = fbx;
          this.scene.add( this.object );

          this.model = this.object.children[0];
          this.model.scale.set(1, 1, 1);

          this.control.attach( this.object );
          this.scene.add( this.control );
      });
  }

  @HostListener('window:keyup', ['$event'])
  keyup ( event ) {
    switch ( event.keyCode ) {

        case 16: // Shift
            this.control.setTranslationSnap( null );
            this.control.setRotationSnap( null );
            this.control.setScaleSnap( null );
            break;

    }
  }

  @HostListener('window:keydown', ['$event'])
  keydown ( event ) {

    switch ( event.keyCode ) {

        case 81: // Q
            this.control.setSpace( this.control.space === "local" ? "world" : "local" );
            break;

        case 16: // Shift
            this.control.setTranslationSnap( 100 );
            this.control.setRotationSnap( THREE.MathUtils.degToRad( 15 ) );
            this.control.setScaleSnap( 0.25 );
            break;

        case 87: // W
            this.control.setMode( "translate" );
            break;

        case 69: // E
            this.control.setMode( "rotate" );
            break;

        case 82: // R
            this.control.setMode( "scale" );
            break;

        case 67: // C
            const position = this.currentCamera.position.clone();

            this.currentCamera = this.currentCamera.isPerspectiveCamera ? this.cameraOrtho : this.cameraPersp;
            this.currentCamera.position.copy( position );

            this.orbit.this.object = this.currentCamera;
            this.control.camera = this.currentCamera;

            this.currentCamera.lookAt( this.orbit.target.x, this.orbit.target.y, this.orbit.target.z );
            onWindowResize();
            break;

        case 86: // V
            const randomFoV = Math.random() + 0.1;
            const randomZoom = Math.random() + 0.1;

            this.cameraPersp.fov = randomFoV * 160;
            this.cameraOrtho.bottom = - randomFoV * 500;
            this.cameraOrtho.top = randomFoV * 500;

            this.cameraPersp.zoom = randomZoom * 5;
            this.cameraOrtho.zoom = randomZoom * 5;
            onWindowResize();
            break;

        case 187:
        case 107: // +, =, num+
            this.control.setSize( this.control.size + 0.1 );
            break;

        case 189:
        case 109: // -, _, num-
            this.control.setSize( Math.max( this.control.size - 0.1, 0.1 ) );
            break;

        case 88: // X
            this.control.showX = ! this.control.showX;
            break;

        case 89: // Y
            this.control.showY = ! this.control.showY;
            break;

        case 90: // Z                                
            this.control.showZ = ! this.control.showZ;
            break;

        case 32: // Spacebar
            this.control.enabled = ! this.control.enabled;
            break;

        case 70:
            toggleWireframe();
            break;

        case 72:
            toggleTips();
            break;

    }
  }

  toggleWireframe()
  {
      this.isWireframe = !this.isWireframe;

      this.object.traverse((node) => {
        if (!node.isMesh) return;
        node.material.wireframe = this.isWireframe;
      });
  }

  toggleTips ()
  {
      this.tipsHidden = !this.tipsHidden;
      if(this.tipsHidden)
          $(".hidable").css("display", "none");
      else
          $(".hidable").css("display", "inherit");
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
      const aspect = window.innerWidth / window.innerHeight;

      this.cameraPersp.aspect = aspect;
      this.cameraPersp.updateProjectionMatrix();

      this.cameraOrtho.left = this.cameraOrtho.bottom * aspect;
      this.cameraOrtho.right = this.cameraOrtho.top * aspect;
      this.cameraOrtho.updateProjectionMatrix();

      this.renderer.setSize( window.innerWidth, window.innerHeight );

      this.render();
  }

  render() {
      this.renderer.render( this.scene, this.currentCamera );
  }
    
}
