const sensitivityMultiplier: number = 1;
var posX: number;
var posY: number;

export const detectMouseMovement = () => {

    document.addEventListener('mousemove', function (event) {
    	posX = event.clientX;
        
    	posY = event.clientY;      
    });

      return (`${posX}, ${posY}`);
}