import * as THREE from "three";

// Генерация панели 3 на 3 секции с умным наложением текстуры
export function generate3x3Panel(options) {
    let xTextureSizes = options.xTextureSizes || [0.333, 0.333, 0.333];
    let yTextureSizes = options.yTextureSizes || [0.333, 0.333, 0.333];
    let widthTexture  = options.widthTexture  || 1.0;
    let heightTexture = options.heightTexture || 1.0;
    let width  = options.width  || 1.0;
    let height = options.height || 1.0;
}
