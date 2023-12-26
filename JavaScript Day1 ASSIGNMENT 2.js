// 1. Create an empty object called "person".
let person = []
// 2. Add the following properties to the "person" object:
// - name: "John"
// - age: 30
// - city: "New York"
person.push(
    {name:"John"},
    {age:30},
    {city:"New York"}
)
// 3. Remove the "age" property from the "person" object.
person.splice(1,1)
// 4. Add a new property called "job" with the value "Engineer" to the "person" object.
person.push({job:"Engineer"})
// 5. Update the "city" property of the "person" object to "San Francisco".
person.splice(1,1,"San Francisco")
// 6. Print the final "person" object after performing the above operations.
console.log(person)