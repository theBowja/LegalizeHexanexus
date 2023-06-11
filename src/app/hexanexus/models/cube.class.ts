import { Plane } from "./plane.enum";

export class Cube {
    isSolid: boolean;
    faces: {
        up?: string,
        down?: string,
        front?: string,
        back?: string,
        left?: string,
        right?: string
    }

    constructor(cubestring: string) {
        this.isSolid = false;
        this.faces = {};

        for (let i = 0; i < cubestring.length; i++) {
            const letter = cubestring[i];

            if (letter === 'S') {
                this.isSolid = true;
            } else if (i + 1 < cubestring.length && this.isFaceLetter(letter)) {
                const face = cubestring[i+1]
                if (letter === 'U') {
                    this.faces.up = face;
                } else if (letter === 'D') {
                    this.faces.down = face;
                } else if (letter === 'F') {
                    this.faces.front = face;
                } else if (letter === 'B') {
                    this.faces.back = face;
                } else if (letter === 'L') {
                    this.faces.left = face;
                } else if (letter === 'R') {
                    this.faces.right = face;
                }
            }
        }
    }

    isFaceLetter(letter: string) {
        return letter === 'U' || letter === 'D' ||
               letter === 'F' || letter === 'B' ||
               letter === 'L' || letter === 'R';
    }

    rotate90(plane: Plane, clockwise: boolean) {
        if (plane === Plane.XY) {
            if (clockwise) {
                const tmp = this.faces.up;
                this.faces.up = this.faces.left;
                this.faces.left = this.faces.down;
                this.faces.down = this.faces.right;
                this.faces.right = tmp;
            } else {
                const tmp = this.faces.up;
                this.faces.up = this.faces.right;
                this.faces.right = this.faces.down;
                this.faces.down = this.faces.left;
                this.faces.left = tmp;
            }
        } else if (plane === Plane.XZ) {
            if (clockwise) {
                const tmp = this.faces.front;
                this.faces.front = this.faces.right;
                this.faces.right = this.faces.back;
                this.faces.back = this.faces.left;
                this.faces.left = tmp;
            } else {
                const tmp = this.faces.front;
                this.faces.front = this.faces.left;
                this.faces.left = this.faces.back;
                this.faces.back = this.faces.right;
                this.faces.right = tmp;
            }
        } else if (plane === Plane.YZ) {
            if (clockwise) {
                const tmp = this.faces.up;
                this.faces.up = this.faces.front;
                this.faces.front = this.faces.down;
                this.faces.down = this.faces.back;
                this.faces.back = tmp;
            } else {
                const tmp = this.faces.up;
                this.faces.up = this.faces.back;
                this.faces.back = this.faces.down;
                this.faces.down = this.faces.front;
                this.faces.front = tmp;
            }
        }
    }
}