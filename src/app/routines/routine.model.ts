export class Routine {
    name: string;
    movements: {
        name: string,
        sets: number
    }[]

    constructor(name: string, movements) {
        this.name = name;
        this.movements = movements;
    }
}