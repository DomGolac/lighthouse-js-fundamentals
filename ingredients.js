const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "chocolate chips", "bananas"];

const ingredientCount = ingredients.length;
let index = 0;

while (index < ingredientCount) {
  console.log(ingredients[index]);
  index++;
};

for (let x = 0; x < ingredientCount; x++) {
  console.log(ingredients[x]);
};


for (let y = ingredientCount - 1; y >= 0; y--) {
  console.log(ingredients[y]);
};