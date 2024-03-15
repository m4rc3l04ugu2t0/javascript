let numbers = [1, 2, 3, 4, 5]

numbers.forEach(double)
numbers.forEach(display)

function double(element, index, array) {
    array[index] = element * 2
}


function display() {
    console.log(numbers)
}


// function logArrayElements(element, index, array) {
//     console.log("a[" + index + "] = " + element);
//   }
//   [2, 5, 9].forEach(logArrayElements);