import { Model3D } from './model3d';

export const WYVERN_MODELS: Model3D[] = [
  {
    name: 'Yin Yang Wyvern',
    loadSrc: 'assets/res/projects/ragnaraven/models/YinYangWyvernRig.gltf',
    source: 'assets/res/projects/ragnaraven/models/YinYangWyvernRig.blend',
    sourceText: '',
    note: '',
    cameraX: -10,
    cameraY: -5,
    cameraZ: -10,
    ambientLightPower: 20,
    directionalLightPower: 3,
  },

  {
    name: 'Yin Yang Wyvern Scene',
    loadSrc: 'assets/res/projects/ragnaraven/models/YinYangWyvern.gltf',
    source: 'assets/res/projects/ragnaraven/models/YinYangWyvern.blend',
    sourceText: '',
    note: '',
    cameraX: 10,
    cameraY: 5,
    cameraZ: 10,
    ambientLightPower: 10,
    directionalLightPower: 5,
  },
];
