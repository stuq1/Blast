import * as THREE from "three";

export const textures = {
    BOARD: "/assets/images/board.png",
    ITEM_BLUE: "/assets/images/item_blue.png",
    ITEM_GREEN: "/assets/images/item_green.png",
    ITEM_PURPLE: "/assets/images/item_purple.png",
    ITEM_RED: "/assets/images/item_red.png",
    ITEM_YELLOW: "/assets/images/item_yellow.png",
    MODE_1_BUTTON: "/assets/images/button_mode_1.png",
    MODE_2_BUTTON: "/assets/images/button_mode_2.png"
}

const textureCache = new Map();

export async function preloadTextures(textures) {
    const loadPromise = new Promise(function (resolve, reject) {
        try {
            const textureLoader = new THREE.TextureLoader();
            let isLoadingCounter = 0;
            let maxLoadingCount = Object.entries(textures).length;
            for (const [_, textureName] of Object.entries(textures)) {
                textureCache.set(textureName, textureLoader.load(textureName, () => {
                    console.log(`Texture "${textureName}" is load`);
                    isLoadingCounter++;
                    if (isLoadingCounter >= maxLoadingCount) {
                        resolve();
                    }
                }));
            }
        } catch (e) {
            reject(e);
        }
    });

    console.log("Preload textures start");

    await loadPromise;

    console.log("Preload textures end");
}

export function getTexture(textureName) {
    return textureCache.get(textureName);
}
