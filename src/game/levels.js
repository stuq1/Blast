import {TileRed} from "./tiles/tileRed";
import {TileBlue} from "./tiles/tileBlue";
import {TileGreen} from "./tiles/tileGreen";
import {TilePurple} from "./tiles/tilePurple";
import {TileYellow} from "./tiles/tileYellow";

export const levels = [
    {
        tiles: [TileRed, TileBlue],
        width: 5,
        height: 5,
        moves: 25,
        scores: 100,
        nextTile: function (x, y) {
            return this.tiles[Math.round(Math.random() * 1000) % this.tiles.length];
        },
        initSpawn: function (x, y) {
            return this.nextTile(x, y);
        }
    },
    {
        tiles: [TileRed, TileBlue, TileGreen, TilePurple, TileYellow],
        width: 10,
        height: 10,
        moves: 15,
        scores: 500,
        nextTile: function (x, y) {
            return this.tiles[Math.round(Math.random() * 1000) % this.tiles.length];
        },
        initSpawn: function (x, y) {
            if (y < this.tiles.length) {
                return this.tiles[y];
            } else {
                return this.nextTile(x, y);
            }
        }
    }
];
