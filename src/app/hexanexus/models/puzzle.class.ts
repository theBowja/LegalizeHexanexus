import { Coord } from "./coord.class";
import { Cube } from "./cube.class";

export class Puzzle {
    size: number;
    cubes: Cube[][][];

    constructor(puzzlestring: string) {
        const puzzle = puzzlestring.split(',');
        this.size = 2;

        this.cubes = [];
        let i = 0;
        for (let x = 0; x < this.size; x++) {
            this.cubes.push([]);
            for (let y = 0; y < this.size; y++) {
                this.cubes[x].push([]);
                for (let z = 0; z < this.size; z++) {
                    this.cubes[x][y].push(new Cube(puzzle[i]));
                    i++;
                }
            }
        }

    }


    draw(scene: THREE.Scene) {
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                for (let z = 0; z < this.size; z++) {
                    this.cubes[x][y][z].addCube(scene, x-0.5, y-0.5, z-0.5);
                }
            }
        }
          
    }

}