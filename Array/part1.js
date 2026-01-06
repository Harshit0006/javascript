const myArray = [1 , 2 , 3 , 4, 5] 

const myFriends = ["Anuj" , "Amit" , "Rudra" , "Mayank"]
const myBroFriends = ["Rahul" , "Ekant" , "Abhinav" ]

const allFriends = [...myFriends , ...myBroFriends]


console.log(myArray);
console.log(myArray[4]);


myArray.pop()
myArray.push(8);
myArray.unshift(99);
myArray.shift()
 
console.log(myArray)
console.log(allFriends)
