import * as THREE from "three";

export const textures = {
    BOARD: "/assets/images/board.png",
    ITEM_BLUE: "/assets/images/item_blue.png",
    ITEM_GREEN: "/assets/images/item_green.png",
    ITEM_PURPLE: "/assets/images/item_purple.png",
    ITEM_RED: "/assets/images/item_red.png",
    ITEM_YELLOW: "/assets/images/item_yellow.png",
}

const textureCache = new Map();

export function preloadTextures(textures) {
    console.log("Preload textures start");

    const textureLoader = new THREE.TextureLoader();
    for (const [_, textureName] of Object.entries(textures)) {
        textureCache.set(textureName, textureLoader.load(textureName, () => {
            console.log(`Texture "${textureName}" is load`);
        }));
    }

    console.log("Preload textures end");
}

export function getTexture(textureName) {
    return textureCache.get(textureName);
}
