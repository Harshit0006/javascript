function functionName() {
    console.log("hello everyone my name is harshit sharma ")
}
functionName()

// function 1st type 
function addTwoNumber(num1, num2) {
    let result = num1 + num2
    console.log(result)

}
addTwoNumber(2, 4)


// function 2nd type 

function addTwoNum(number1, number2) {
    return number1 + number2
}
console.log(addTwoNum(2, 4))


// function with objects

 const user = {
    name: "harshit",
    age: "24",
    professional: "frontend developer"
}


 function myData(anyObject) {
    return `${anyObject.name} is logged In`
}
console.log(myData(user));


 function myData({ name }) {
  return `${name} is logged In`
}

console.log(myData(user))
