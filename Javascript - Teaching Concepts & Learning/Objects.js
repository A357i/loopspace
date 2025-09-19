// object = a collection of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          object = {key: value,
//                    function()}

const person1 = {
    firstName: "Spon",
    lastName: "ZB",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi i am Spon!")},
    eat: function(){console.log("Im eating a crab")},
}

person1.sayHello();
person1.eat();

const person2 = {
    firstName: "Patrick",
    lastName: "Bat",
    age: 34,
    isEmployed: false,
    // sayHello: function(){console.log("Hi i am Patrick...!")}
    sayHello: () => console.log("Hey, I'm Patrick..."),
    eat: () => console.log("I'm eating roast beef!")

}

person2.sayHello();
person2.eat();

console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.age)
console.log(person1.isEmployed)

console.log(person2.firstName)
console.log(person2.lastName)
console.log(person2.age)
console.log(person2.isEmployed)