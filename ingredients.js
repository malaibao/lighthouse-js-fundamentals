const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log('Print ingredients with while loop');
let j = 0;
while(j < ingredients.length){
	console.log(ingredients[j]);
	j++;
}

// Write a for loop that prints out the contents of ingredients:
console.log('Print ingredients with for loop');
for(let i = 0; i < ingredients.length; i++){
	console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log('Print ingredients backward with for loop');
for(let i = ingredients.length - 1; i >= 0; i--){
	console.log(ingredients[i]);
}
