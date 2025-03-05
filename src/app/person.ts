import { Health } from "./health";

export class Person {
    constructor(
        public firstName: string,
        public lastName: string,
        public middleName: string,
        public marriedLastName: string,
        public email: string,
        public health: Health
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.marriedLastName = marriedLastName;
        this.email = email;
        this.health = health;
    }
    
}
