class Car {
    engine: string;

    constructor (engine: string) {
        this.engine = engine;
    }

    start () {
        alert('Engine started: ' + this.engine);
    }

    stop () {
        alert('Engine stoped' + this.engine);
    }
}

class Test {
    // Annotations and Inferences
    any1: any;
    num1: number;
    num2: number = 2;
    num3 = 3;
    num4 = this.num3 + 100;
    str = this.num1 + 'some sting';
    //nothappy: number = this.num2 + 'some string';
    
}

// window.onload = function () {
//     var car = new Car('V8-TypeScript Rules');
//     car.start();
//     car.stop();
// }
