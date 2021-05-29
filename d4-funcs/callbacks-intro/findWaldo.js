// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  // let namee = names
  names.forEach((names, index) => {
    if (names === "Waldo") {
      found(index);   // execute callback
    }
  })
}



const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);