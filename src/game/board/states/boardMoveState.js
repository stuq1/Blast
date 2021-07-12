import {State} from "../../../core/stateMachine";

export class BoardMoveState extends State {

    constructor(stateMachine) {
        super(stateMachine);
    }

    onActivate() {
        super.onActivate();

        this.findClusters();
    }

    onDeactivate() {
        super.onDeactivate();
    }

    onEvent(event) {
        super.onEvent(event);

        const board = this.stateMachine;

        switch (event.eventType) {
            case "onclick": {
                const intersects = event.data.raycaster.intersectObjects([board.group], true);
                if (intersects.length > 0) {
                    const tile = intersects[0].object.userData;

                    let idCluster = this.tileClustersMap[tile.x][tile.y];
                    let cluster = this.clusters[idCluster];
                    if (cluster.tiles.length > 1) {
                        for (let tile of cluster.tiles) {
                            board.removeTile(board.tiles[tile.x][tile.y]);
                        }
                        board.setCurrentState(this.stateMachine.PHYSIC_STATE);
                    }
                }
                break;
            }
        }
    }

    findClusters() {
        const board = this.stateMachine;

        this.clusters = [];
        this.tileClustersMap = [];
        let used = [];

        const addCluster = (tilesType) => {
            const id = this.clusters.length;
            this.clusters.push({
                tilesType: tilesType,
                id: id,
                tiles: []
            });
            return id;
        }

        const addIntoCluster = (idCluster, x, y) => {
            this.clusters[idCluster].tiles.push({x, y});
            this.tileClustersMap[x][y] = idCluster;
        }

        const findCluster = (x, y) => {
            const tilesType = board.tiles[x][y].tileType
            const idCluster = addCluster(tilesType);

            let tilesQueue = [{x, y}];
            while (tilesQueue.length > 0) {
                let tile = tilesQueue.shift();
                let x = tile.x,
                    y = tile.y;

                if (used[x][y]) {
                    continue;
                }

                used[x][y] = true;
                addIntoCluster(idCluster, x, y);

                if (x-1 >= 0) {
                    if (board.tiles[x-1][y].tileType === tilesType && !used[x-1][y]) {
                        tilesQueue.push({x: x-1, y});
                    }
                }

                if (x+1 < board.level.width) {
                    if (board.tiles[x+1][y].tileType === tilesType && !used[x+1][y]) {
                        tilesQueue.push({x: x+1, y});
                    }
                }

                if (y-1 >= 0) {
                    if (board.tiles[x][y-1].tileType === tilesType && !used[x][y-1]) {
                        tilesQueue.push({x, y: y-1});
                    }
                }

                if (y+1 < board.level.height) {
                    if (board.tiles[x][y+1].tileType === tilesType && !used[x][y+1]) {
                        tilesQueue.push({x, y: y+1});
                    }
                }
            }

            return idCluster;
        }

        for (let x = 0; x < board.level.width; x++) {
            this.tileClustersMap.push([]);
            used.push([]);

            for (let y = 0; y < board.level.height; y++) {
                this.tileClustersMap[x][y] = -1;
                used[x][y] = false;
            }
        }

        for (let x = 0; x < board.level.width; x++) {
            for (let y = 0; y < board.level.height; y++) {
                if (used[x][y]) {
                    continue;
                }

                findCluster(x, y);
            }
        }
    }

}
