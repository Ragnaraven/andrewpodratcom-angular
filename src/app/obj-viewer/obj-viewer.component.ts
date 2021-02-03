import { Component, OnInit, HostListener, Input, ElementRef, ViewChild } from '@angular/core';
import { Model3D } from '../data/projects/models/model3d';

import * as THREE from            'three';
import { OrbitControls } from     'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { FBXLoader } from         'three/examples/jsm/loaders/FBXLoader.js';
import { GLTFLoader } from         'three/examples/jsm/loaders/GLTFLoader.js';
import { Camera, OrthographicCamera, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-obj-viewer',
  templateUrl: './obj-viewer.component.html',
  styleUrls: ['./obj-viewer.component.scss']
})
export class ObjViewerComponent implements OnInit {

  @Input()
  model3D: Model3D;   

  @Input()
  model3Ds: Model3D[];  

  constructor() { }

  ngOnInit(): void {
    if(this.model3D == null)
      this.model3D = this.model3Ds[0];
  }

  @ViewChild('objWindow')
  objWindow: ElementRef;

  private cameraPersp: PerspectiveCamera;
  private cameraOrtho: OrthographicCamera
  private currentCamera: Camera;

  private control;
  private scene: THREE.Scene;
  private renderer: THREE.WebGLRenderer; 
  private orbit;

  private model;
  private hlight;
  private directionalLight;
  private object;
  private tipsHidden = false;
  private isWireframe = false;

  previewModel2() {
    this.previewModel(this.model3D)
  }

  previewModel(model3D: Model3D)
  {
    this.model3D = model3D;

    if(this.model3D.cameraX == null)
      this.model3D.cameraX = 10;
    
    if(this.model3D.cameraY == null)
      this.model3D.cameraY = 5;
    
    if(this.model3D.cameraZ == null)
      this.model3D.cameraZ = 10;
    
    if(this.model3D.ambientLightPower == null)
      this.model3D.ambientLightPower = 1;
    
    if(this.model3D.directionalLightPower == null)
      this.model3D.directionalLightPower = 1;

    this.initPreviewScene(this.model3D.loadSrc, this.model3D.cameraX, this.model3D.cameraY, this.model3D.cameraZ, this.model3D.ambientLightPower, this.model3D.directionalLightPower);     
  }

  initPreviewScene(loadSrc, cameraX, cameraY, cameraZ, ambientLightPower, directionLightPower) {
      /*Camera setup*/
      const aspect = this.objWindow.nativeElement.offsetWidth / this.objWindow.nativeElement.offsetHeight;

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
      this.renderer.setSize(this.objWindow.nativeElement.offsetWidth, this.objWindow.nativeElement.offsetHeight);
      this.objWindow.nativeElement.appendChild(this.renderer.domElement)

      console.log(this.renderer);

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
      this.control.addEventListener( 'change', () => { this.render(); } );
      this.control.addEventListener( 'dragging-changed', function ( event ) { this.orbit.enabled = ! event.value;  } );

      /*let loader = new FBXLoader()
      loader.load(loadSrc, function(fbx) {
          this.scene.add( fbx );
          this.object = fbx;*/
          
    let loader = new GLTFLoader();
    loader.load(loadSrc, 
      ( gltf ) => {
          console.log("LOADED!")
          this.object = gltf.scene;
          this.scene.add( this.object );

          this.model = this.object.children[0];
          this.model.scale.set(1, 1, 1);

          this.control.attach( this.object );
          this.scene.add( this.control );
      },
      ( xhr ) => {
          // called while loading is progressing
          console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
      },
      ( error ) => {
          // called when loading has errors
          console.error( 'An error happened', error );
      },
      );
  }

  @HostListener('window:keyup', ['$event'])
  keyup ( event ) 
  {
    switch ( event.keyCode )
    {
        case 16: // Shift
            this.control.setTranslationSnap( null );
            this.control.setRotationSnap( null );
            this.control.setScaleSnap( null );
            break;

    }
  }

  @HostListener('window:keydown', ['$event'])
  keydown ( event )
  {
    switch ( event.keyCode ) 
    {

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

            this.orbit.object = this.currentCamera;
            this.control.camera = this.currentCamera;

            this.currentCamera.lookAt( this.orbit.target.x, this.orbit.target.y, this.orbit.target.z );
            this.onWindowResize();
            break;

        case 86: // V
            const randomFoV = Math.random() + 0.1;
            const randomZoom = Math.random() + 0.1;

            this.cameraPersp.fov = randomFoV * 160;
            this.cameraOrtho.bottom = - randomFoV * 500;
            this.cameraOrtho.top = randomFoV * 500;

            this.cameraPersp.zoom = randomZoom * 5;
            this.cameraOrtho.zoom = randomZoom * 5;
            this.onWindowResize();
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
            this.toggleWireframe();
            break;

        case 72:
          this.toggleTips();
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
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
      const aspect = this.objWindow.nativeElement.offsetWidth /this.objWindow.nativeElement.offsetHeight;

      this.cameraPersp.aspect = aspect;
      this.cameraPersp.updateProjectionMatrix();

      this.cameraOrtho.left = this.cameraOrtho.bottom * aspect;
      this.cameraOrtho.right = this.cameraOrtho.top * aspect;
      this.cameraOrtho.updateProjectionMatrix();

      this.renderer.setSize( this.objWindow.nativeElement.offsetWidth,this.objWindow.nativeElement.offsetHeight );

      this.render();
  }

  render() {
      this.renderer.render( this.scene, this.currentCamera );
  }
}
