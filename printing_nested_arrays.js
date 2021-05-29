const printItems = function(array) {
  for (let item of array) {
    console.log(item);
  }
}


const printItems2 = function(array) {
  for (let item of array) {
    if (Array.isArray(item)) {

    } else {
      console.log(item)
    }
  }
}

const printItems3 = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      printItems3(item);
    } else {
      console.log(item)
    }
  });
}

const printItems4 = function(array) {
  while (array.length > 0) {
    const element = array.shift();

    if (Array.isArray(element)) {
      element.reverse().forEach((newElement)=> {
        array.unshift(newElement);
      });
    } else {
      console.log(element);
    }
  }
}
// more difficult to read and debug^
const array = ["😎", ["💩", "🤗"], "😼", "😂"];

printItems(array);
console.log("---")
printItems2(array);
console.log("---")
printItems3(array);