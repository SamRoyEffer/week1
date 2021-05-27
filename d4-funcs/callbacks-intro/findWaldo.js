// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      let place = i
      found(place);   // execute callback
    }
  }
}

const actionWhenFound = function(place) {
  console.log(`Found Waldo at index ${place}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);