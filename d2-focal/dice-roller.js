const diceNum = process.argv.slice(2)



const diceRoller = function(diceNum){
  let diceFace = [];
  
  for (let i = 0; i < diceNum; i++) {
   diceFace.push(Math.floor((Math.random() * 6) + 1))
    // diceFace = [...diceFace, Math.floor((Math.random() * 6) + 1)];
    // diceFace += rolledValues;
    // diceFace = [...diceFace, Math.floor((Math.random() * 6) + 1)];(spread operator)
  }
  
  return diceFace;
  
}
const d6 = diceRoller(diceNum)

console.log(`Rolled ${diceNum} dice: ${d6}`)

// take the value
// "roll" that many times in the value
//present the rolled values in a string and how many 