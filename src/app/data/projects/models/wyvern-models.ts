import { Model3D } from './model3d';

export const MODELS: Model3D[] = [  
    
  {
    name: "Yin Yang Wyvern Mesh Only",
    loadSrc: "assets/res/projects/ragnaraven/models/YinYangWyvernRig.gltf", 
    source: "assets/res/projects/ragnaraven/models/YinYangWyvernRig.blend",
    sourceText: "YinYangWyvernRig.blend",
    note: "Please be aware that the 3D preview may skew colors, shading or other contain other minor quirks. For best results, please download the source files and explore in Blender.",
    cameraX: -25,
    cameraY: -5,
    cameraZ: -25,
    ambientLightPower: 10,
    directionalLightPower: 5
  }, 

  { 
    name: "Yin Yang Wyvern Scene",
    loadSrc: "assets/res/projects/ragnaraven/models/YinYangWyvern.gltf", 
    source: "assets/res/projects/ragnaraven/models/YinYangWyvern.blend",
    sourceText: "YinYangWyvern.blend",
    note: "Please be aware that the 3D preview may skew colors, shading or other contain other minor quirks. For best results, please download the source files and explore in Blender.",
    cameraX: 10,
    cameraY: 5,
    cameraZ: 10,
    ambientLightPower: 10,
    directionalLightPower: 5
  },
];
