type Gender = 'M' | 'F' | 'O';

export class Profile {
    gender: Gender;
    age: number;
    ethnicity: string;
    name: string;
    surname: string;

    constructor(gender: Gender, age: number, ethnicity: string, name: string, surname: string) {
        this.gender = gender;
        this.age = age;
        this.ethnicity = ethnicity;
        this.name = name;
        this.surname = surname;
    }
}
