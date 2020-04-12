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