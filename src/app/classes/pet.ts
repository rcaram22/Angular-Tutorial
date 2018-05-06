

export class Pet {
    id: string;
    name: string;
    age: number;
    size: string;
    birthDate: Date;
    weight: number;
    breedName: string;
    imageUrl: string;

    constructor(id:string, name:string, age:number, size:string, birthDate:Date, weight:number, breedName:string, imageUrl: string){
        this.id = id;
        this.name = name;
        this.age = age;
        this.size = size;
        this.birthDate = birthDate;
        this.weight = weight;
        this.breedName = breedName;
        this.imageUrl = imageUrl;
    }
}