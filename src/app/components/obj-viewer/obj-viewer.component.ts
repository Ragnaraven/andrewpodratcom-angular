import {
  Component,
  OnInit,
  HostListener,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Model3D } from '../../../data/projects/models/model3d';
//import { DeviceDetectorService } from 'ngx-device-detector';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrthographicCamera, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-obj-viewer',
  templateUrl: './obj-viewer.component.html',
  styleUrls: ['./obj-viewer.component.scss'],
})
export class ObjViewerComponent implements OnInit, AfterViewInit {
  @Input()
  model3D: Model3D;

  @Input()
  model3Ds: Model3D[];

  //deviceInfo = null;

  constructor(/*private deviceService: DeviceDetectorService*/) {
    //this.deviceInfo = this.deviceService.getDeviceInfo();
  }

  ngOnInit(): void {
    if (this.model3D == null) this.model3D = this.model3Ds[0];
  }

  ngAfterViewInit(): void {
    if (!this.mobileCheck()) this.previewModel(this.model3D);
  }

  mobileCheck() {
    return false; //this.deviceService.isMobile();
  }

  @ViewChild('objWindow')
  objWindow: ElementRef;

  private cameraPersp: PerspectiveCamera;
  private cameraOrtho: OrthographicCamera;
  private currentCamera;

  private scene: THREE.Scene;
  private renderer: THREE.WebGLRenderer;
  //private control: TransformControls;
  private orbit: OrbitControls;

  private model;
  private object;
  private hlight: THREE.AmbientLight;
  private directionalLight: THREE.DirectionalLight;
  private isWireframe = false;
  tipsHidden = false;
  loaded = false;
  pressed = false;

  startPreview() {
    this.pressed = true;
    this.previewModel(this.model3D);
  }

  previewModel(model3D: Model3D) {
    this.model3D = model3D;

    if (this.model3D.cameraX == null) this.model3D.cameraX = 10;

    if (this.model3D.cameraY == null) this.model3D.cameraY = 5;

    if (this.model3D.cameraZ == null) this.model3D.cameraZ = 10;

    if (this.model3D.ambientLightPower == null)
      this.model3D.ambientLightPower = 1;

    if (this.model3D.directionalLightPower == null)
      this.model3D.directionalLightPower = 1;

    this.initPreviewScene(
      this.model3D.loadSrc,
      this.model3D.cameraX,
      this.model3D.cameraY,
      this.model3D.cameraZ,
      this.model3D.ambientLightPower,
      this.model3D.directionalLightPower
    );
  }

  initPreviewScene(
    loadSrc,
    cameraX,
    cameraY,
    cameraZ,
    ambientLightPower,
    directionLightPower
  ) {
    /*Camera setup*/
    const aspect =
      this.objWindow.nativeElement.offsetWidth /
      this.objWindow.nativeElement.offsetHeight;

    this.cameraPersp = new THREE.PerspectiveCamera(50, aspect, 0.01, 30000);
    this.cameraOrtho = new THREE.OrthographicCamera(
      -600 * aspect,
      600 * aspect,
      600,
      -600,
      0.01,
      30000
    );
    this.currentCamera = this.cameraPersp;

    this.currentCamera.position.set(cameraX, cameraY, cameraZ);
    this.currentCamera.lookAt(0, 200, 0);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x555555);

    /*******
      Hide Grid
      *******/

    /*******
      Lighting
      *******/
    this.hlight = new THREE.AmbientLight(0x404040, ambientLightPower);
    this.scene.add(this.hlight);

    this.directionalLight = new THREE.DirectionalLight(
      0xffffff,
      directionLightPower
    );
    this.directionalLight.position.set(1, 1, 1);
    this.directionalLight.target.position.set(0, 0, 0);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);

    /********
      Rendering
      ********/
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(
      this.objWindow.nativeElement.offsetWidth,
      this.objWindow.nativeElement.offsetHeight
    );
    this.objWindow.nativeElement.appendChild(this.renderer.domElement);

    /********
      Axes and Grid
      ********/
    /* 
      var axesHelper = new THREE.AxesHelper( 10 );
      this.scene.add( axesHelper );

      //(size, divisions)
      var gridHelper = new THREE.GridHelper( 10, 10 );
      this.scene.add( gridHelper );*/

    /*******
      controls
      *******/
    this.orbit = new OrbitControls(
      this.currentCamera,
      this.renderer.domElement
    );
    this.orbit.update();
    this.orbit.addEventListener('change', this.render.bind(this));

    /*
      this.control = new TransformControls( this.currentCamera, this.renderer.domElement );
      this.control.addEventListener( 'change', this.render.bind(this));
      this.control.addEventListener( 'dragging-changed', function ( event ) { this.orbit.enabled = ! event.value;  } );*/

    /* let loader = new FBXLoader()
      loader.load(loadSrc, function(fbx) {
          this.scene.add( fbx );
          this.object = fbx;

          this.model = this.object.children[0];
          this.model.scale.set(1, 1, 1);

          this.control.attach( this.object );
          this.scene.add( this.control );
      });*/

    let loader = new GLTFLoader();
    loader.load(
      loadSrc,
      (gltf) => {
        //console.log("LOADED!")
        this.object = gltf.scene;
        this.scene.add(this.object);

        this.model = this.object.children[0];
        this.model.scale.set(1, 1, 1);

        /*this.control.attach( this.object );
              this.scene.add( this.control );*/
        this.render();
      },
      (xhr) => {
        // called while loading is progressing
        //console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
      },
      (error) => {
        // called when loading has errors
        console.error('An error happened', error);
      }
    );

    this.loaded = true;
  }

  @HostListener('window:keyup', ['$event'])
  keyup(event) {
    switch (event.keyCode) {
      case 16: // Shift
        /*this.control.setTranslationSnap( null );
            this.control.setRotationSnap( null );
            this.control.setScaleSnap( null );*/
        break;
    }
  }

  @HostListener('window:keydown', ['$event'])
  keydown(event) {
    switch (event.keyCode) {
      case 67: // C
        const position = this.currentCamera.position.clone();

        this.currentCamera = this.currentCamera.isPerspectiveCamera
          ? this.cameraOrtho
          : this.cameraPersp;
        this.currentCamera.position.copy(position);

        this.orbit.object = this.currentCamera;
        //this.control.camera = this.currentCamera;

        this.currentCamera.lookAt(
          this.orbit.target.x,
          this.orbit.target.y,
          this.orbit.target.z
        );
        this.onWindowResize();
        break;

      case 86: // V
        const randomFoV = Math.random() + 0.1;
        const randomZoom = Math.random() + 0.1;

        this.cameraPersp.fov = randomFoV * 160;
        this.cameraOrtho.bottom = -randomFoV * 500;
        this.cameraOrtho.top = randomFoV * 500;

        this.cameraPersp.zoom = randomZoom * 5;
        this.cameraOrtho.zoom = randomZoom * 5;
        this.onWindowResize();
        break;

      case 70:
        this.toggleWireframe();
        break;

      case 72:
        this.toggleTips();
        break;
    }
  }

  toggleWireframe() {
    this.isWireframe = !this.isWireframe;

    this.object.traverse((node) => {
      if (!node.isMesh) return;
      node.material.wireframe = this.isWireframe;
    });
  }

  toggleTips() {
    this.tipsHidden = !this.tipsHidden;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    const aspect =
      this.objWindow.nativeElement.offsetWidth /
      this.objWindow.nativeElement.offsetHeight;

    this.cameraPersp.aspect = aspect;
    this.cameraPersp.updateProjectionMatrix();

    this.cameraOrtho.left = this.cameraOrtho.bottom * aspect;
    this.cameraOrtho.right = this.cameraOrtho.top * aspect;
    this.cameraOrtho.updateProjectionMatrix();

    this.renderer.setSize(
      this.objWindow.nativeElement.offsetWidth,
      this.objWindow.nativeElement.offsetHeight
    );

    this.render();
  }

  render() {
    this.renderer.render(this.scene, this.currentCamera);
  }
}
