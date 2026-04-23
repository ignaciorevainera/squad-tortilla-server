export type ModType = 'mod' | 'dependency' | 'shader';
export type ContentCategory = 'núcleo' | 'rendimiento' | 'social' | 'utilidad' | 'visual' | 'criaturas' | 'objetos' | 'variado' | 'entorno';

export interface Mod {
  id: string;
  name: string;
  description: string;
  type: ModType; 
  contentCategory: ContentCategory;
  isRequired: boolean;
  downloadUrl: string;
  dependencies?: string[];
}

export const modsList: Mod[] = [
  // --- Dependencias ---
  {
    id: 'fabric-api',
    name: 'Fabric API',
    description: 'Librería base fundamental para casi todos los mods de Fabric. Estrictamente necesaria.',
    type: 'dependency',
    contentCategory: 'núcleo',
    isRequired: true,
    downloadUrl: 'https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/all?page=1&pageSize=20&version=1.21.10&gameVersionTypeId=4&showAlphaFiles=hide',
  },
  {
    id: 'terrablender',
    name: 'TerraBlender (Fabric)',
    description: 'Librería requerida para que los biomas nuevos puedan generarse e integrarse correctamente.',
    type: 'dependency',
    contentCategory: 'núcleo',
    isRequired: true,
    downloadUrl: 'https://www.curseforge.com/minecraft/mc-mods/terrablender-fabric/files/all?page=1&pageSize=20&version=1.21.10&gameVersionTypeId=4&showAlphaFiles=hide',
  },
  {
    id: 'glitchcore',
    name: 'GlitchCore',
    description: 'Librería de código compartido obligatoria para que funcione Biomes O\' Plenty.',
    type: 'dependency',
    contentCategory: 'núcleo',
    isRequired: true,
    downloadUrl: 'https://www.curseforge.com/minecraft/mc-mods/glitchcore/files/all?page=1&pageSize=20&version=1.21.10&gameVersionTypeId=4&showAlphaFiles=hide',
  },
  {
    id: 'balm',
    name: 'Balm',
    description: 'Librería de abstracción para facilitar compatibilidad técnica en múltiples cargadores.',
    type: 'dependency',
    contentCategory: 'núcleo',
    isRequired: true,
    downloadUrl: 'https://www.curseforge.com/minecraft/mc-mods/balm/files/all?page=1&pageSize=20&version=1.21.10&gameVersionTypeId=4&showAlphaFiles=hide',
  },
  {
    id: 'balm-fabric',
    name: 'Balm (Fabric)',
    description: 'Versión puente para Fabric de la librería Balm. Requerida urgentemente por Waystones.',
    type: 'dependency',
    contentCategory: 'núcleo',
    isRequired: true,
    downloadUrl: 'https://www.curseforge.com/minecraft/mc-mods/balm-fabric/files/all?page=1&pageSize=20&version=1.21.1&gameVersionTypeId=4&showAlphaFiles=hide',
  },
  // --- Mods ---
  {
    id: 'biomes-o-plenty',
    name: "Biomes O' Plenty",
    description: 'Añade una enorme variedad de biomas nuevos, árboles, plantas y bloques por todo el mapa.',
    type: 'mod',
    contentCategory: 'entorno',
    isRequired: true,
    downloadUrl: 'https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty/files/all?page=1&pageSize=20&version=1.21.10&gameVersionTypeId=4&showAlphaFiles=hide',
    dependencies: ['TerraBlender', 'GlitchCore', 'Fabric API']
  },
  {
    id: 'waystones',
    name: 'Waystones',
    description: 'Añade monolitos de piedra (Waystones) para realizar viajes rápidos y teletransporte en el mundo.',
    type: 'mod',
    contentCategory: 'utilidad',
    isRequired: true,
    downloadUrl: 'https://www.curseforge.com/minecraft/mc-mods/waystones/files/all?page=1&pageSize=20&version=1.21.10&gameVersionTypeId=4&showAlphaFiles=hide',
    dependencies: ['Balm', 'Balm (Fabric)', 'Fabric API']
  },
  {
    id: 'journeymap',
    name: 'JourneyMap',
    description: 'Mapea el mundo en tiempo real mientras exploras. Incluye minimapa en pantalla y mapa a pantalla completa.',
    type: 'mod',
    contentCategory: 'utilidad',
    isRequired: false,
    downloadUrl: 'https://www.curseforge.com/minecraft/mc-mods/journeymap/files/all?page=1&pageSize=20&version=1.21.10&gameVersionTypeId=4&showAlphaFiles=hide',
    dependencies: ['Fabric API']
  }
];
