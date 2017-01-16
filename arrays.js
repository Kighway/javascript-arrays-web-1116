chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


// function addElementToBeginningOfArray (array, element) {
//   return [element, ...array];
// }

// var addElementToBeginningOfArray = (array, element) => { return [element, ...array] }

var addElementToBeginningOfArray = (array, element) => [element, ...array]

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

var addElementToEndOfArray = (array, element) => [...array, element]

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}

var accessElementInArray = (array, index) => array[index]

function removeElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromEndOfArray(array) {
  array.pop();
  return array;
}
