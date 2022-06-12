function getPersons(){

    class Person {
        constructor(firstName, lastName, age, email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    
    const resultArray = [];

    let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    resultArray.push(person);

    person = new Person("SoftUni");
    resultArray.push(person);

    person = new Person("Stephan", "Johnson", 25);
    resultArray.push(person);

    person = new Person("Gabriel", "Peterson", 24, "g.p@gmail.com");
    resultArray.push(person);

    return resultArray;
}

console.log(getPersons());