const processor = require('./processor')

// 5 3
// 1 1 E
// RFRFRFRF
// 3 2 N
// FRRFLLFFRRFLL
// 0 3 W
// LLFFFLFLFL

const input =  process.argv[2];
var inputLines = input.split(";");

const rovers = processor.processRover(inputLines);

rovers.forEach(element => {
  console.log(element.getRoverState());
});
