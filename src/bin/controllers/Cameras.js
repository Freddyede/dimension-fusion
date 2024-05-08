/**
 * This class is for the camera of player
 * @version 0.0.1
 * @author Patouillard Franck <patouillardfranck.development@gmail.com>
 */
export class Cameras {
    x;
    y;
    z;
    constructor(x, y, z) {
        this.x = typeof x === "number" ? x : 0;
        this.y = typeof y === "number" ? y : 0;
        this.z = typeof z === "number" ? z : 0;
        this.rotation = false;
    }
    movePosToX(number) {
        this.x += typeof number === 'number' ? number : 0;
    }
    moveNegToX(number) {
        this.x =  typeof number === 'number' ? this.x - number : 0;
    }
    rotateToX(deg) {
        this.x += typeof deg === 'number' && deg <= 360 ? deg : 0;
        this.rotation = true;
    }
    rotateNegToX(deg) {
        this.x -= typeof deg === 'number' && deg <= 360 ? deg : 0;
        this.rotation = true;
    }
    movePosToY(number) {
        this.y += typeof number === 'number' ? number : 0;
    }
    moveNegToY(number) {
        this.y -= typeof number === 'number' ? number : 0;
    }
    rotateToY(deg) {
        this.y += typeof deg === 'number' && deg <= 360 ? deg : 0;
        this.rotation = true;
    }
    rotateNegToY(deg) {
        this.y -= typeof deg === 'number' && deg <= 360 ? deg : 0;
        this.rotation = true;
    }
    movePosToZ(number) {
        this.z += typeof number === 'number' ? number : 0;
    }
    moveNegToZ(number) {
        this.z -= typeof number === 'number' ? number : 0;
    }
    rotateToZ(deg) {
        this.z += typeof deg === 'number' && deg <= 360 ? deg : 0;
        this.rotation = true;
    }
    rotateNegToZ(deg) {
        this.z -= typeof deg === 'number' && deg <= 360 ? deg : 0;
        this.rotation = true;
    }
}