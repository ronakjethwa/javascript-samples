// Operation 1
// merge and sort two arrays
let array1 = ['bat', 'cat', 'hat', 'mat']
let array2 = ['chat', 'gnat', 'mat', 'tat']
let fullArray = [];
let fullArrraySorted = [];

function concatMyArrays() {
  return array1.concat(array2);
}

function sortMyArray(fullArray) {
  fullArraySorted = fullArray.sort();
}

fullArray = concatMyArrays();
console.log("Merged Array is " + fullArray);

sortMyArray(fullArray);
console.log("Sorted Array is " + fullArraySorted);


// Operation 2
// different ways to update an array item using index
let numbers = ['one', 'two', 'three', 'four'];
let index = 1;

// Approach 1
numbers[index] = "new_item";
// output = ['one', 'new_item', 'three', 'four'];

// Approach 2
number.splice(replaceIndex, 1, "new_item")
// output = ['one', 'new_item', 'three', 'four'];

// Approach 2
number = Object.assign([...numbers], { [index]: "new_item" })
// output = ['one', 'new_item', 'three', 'four'];