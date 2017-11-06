import { Type } from 'class-transformer';

export class Person {
    id: number;
    firstName: string;
    lastName: string;

    @Type(() => Cat)
    cats: Cat[];

    getName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

export class Cat {
    id: number;
    name: string;
}
