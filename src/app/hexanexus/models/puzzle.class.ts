import { Coord } from "./coord.class";
import { Cube } from "./cube.class";

export class Puzzle {
    size: number;
    cubes: Cube[][][];

    constructor(puzzlestring: string) {
        this.size = 2;

        this.cubes = [];
        for (let x = 0; x < this.size; x++) {
            this.cubes.push([]);
            for (let y = 0; y < this.size; y++) {
                this.cubes[x].push([]);
                for (let z = 0; z < this.size; z++) {
                    this.cubes[x][y].push(new Cube(''));
                }
            }
        }


    }




}