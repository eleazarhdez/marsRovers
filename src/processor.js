const { MarsRover } = require('./marsRovers');
const useState = require ('./useState');

var rovers = [];
function defineplanetSize(planetSize) {
  let size = planetSize.split(" ");
  return {
    x: Number.parseInt(size[0]),
    y: Number.parseInt(size[1])
  }
}

const { getState: getBoundsState, setState: setBoundsState } = useState([]); // []

const setBoundFounded = bound => {
  const nextState = [...getBoundsState(), bound];
  setBoundsState(nextState);
};

function processRover(inputLines) {
  for (let i = 1; i < inputLines.length; i++) {
    const roverObject = MarsRover({
      status: "WORKING",
      setBoundFounded,
      bounds: getBoundsState(),
      initialState: definePositionAndDirection(inputLines[i]),
      planetSize: defineplanetSize(inputLines[0])
    });
    roverObject.insertCommand(inputLines[++i])
    rovers.push(roverObject);
    // console.log("POSICION: ", roverObject.getRoverState()); 
  }
  return rovers;
}



function definePositionAndDirection(locationAndDirection) {
  let inp = locationAndDirection.split(" ");
  return {
    x: Number.parseInt(inp[0]),
    y: Number.parseInt(inp[1]),
    orientation: inp[2]
  }
}

module.exports = {
  defineplanetSize,
  definePositionAndDirection,
  processRover
}