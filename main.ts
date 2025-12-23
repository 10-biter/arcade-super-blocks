//% icon="\uf192" color=#005953
namespace more {

    /**
     * Move sprite up by some pixels
     */
    //% block="move $sprite up by $pixels"
    //% pixels.defl=5
    export function moveUp(sprite: Sprite, pixels: number) {
        sprite.y -= pixels
    }

    /**
     * Move sprite down by some pixels
     */
    //% block="move $sprite down by $pixels"
    //% pixels.defl=5
    export function moveDown(sprite: Sprite, pixels: number) {
        sprite.y += pixels
    }


    //% block="move the $thing with speed $speed"
    export function move(thing:Sprite, speed?:number): void {
        
    }
    
}