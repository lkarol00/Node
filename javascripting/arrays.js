//Ejercicio 11
var pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni']
console.log(pizzaToppings)

//Ejercicio 12
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var filtered = numbers.filter(function (number){
    return number % 2 === 0;
});
console.log(filtered)

//Ejercicio 13
var food = ['apple', 'pizza', 'pear']
console.log(food[1])

//Ejercicio 14
var pets = ['cat', 'dog', 'rat']
for (var i = 0; i < pets.length; i++){
    pets[i] = pets[i] + 's'
}
console.log(pets)