import { Person } from './person';
import { Health } from './health';
export class ClassOf85 {
    constructor(
        public people: Person[]
    ){
        this.people = people;
        }
        
        [Symbol.iterator](): Iterator<Person> {
            let pointer = 0;
            let people = this.people;

            return {
                next(): IteratorResult<Person> {
                    if (pointer < people.length) {
                        return {
                            done: false,
                            value: people[pointer++]
                        };
                    } else {
                        return {
                            done: true,
                            value: null
                        };
                    }
                }
            };
        }
    }
