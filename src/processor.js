const { MarsRover } = require('./marsRovers');
const useState = require ('./useState');

var rovers = [];
function defineplanetSize(planetSize) {
  let size = planetSize.split(" ");
  const planetLocation = {
    x: Number.parseInt(size[0]),
    y: Number.parseInt(size[1])
  }
  if (isFarLocation(planetLocation)){
    throw new Error("This planet is too big!");
  }
  return planetLocation;
}

const { getState: getBoundsState, setState: setBoundsState } = useState([]); 

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
    let commandSequence = inputLines[++i];
    if (iscommandsInstructionCorrect(commandSequence)){
      throw new Error("Command instructions are too big! We only accept 100 instructions");
    }

    roverObject.insertCommand(commandSequence)
    rovers.push(roverObject);
  }
  return rovers;
}

function iscommandsInstructionCorrect(commandSequence){
  return commandSequence.length > 100;
}


function isFarLocation(location){
  return location.x > 50 || location.y > 50;
}


function definePositionAndDirection(locationAndDirection) {
  let inp = locationAndDirection.split(" ");
  const location = {
    x: Number.parseInt(inp[0]),
    y: Number.parseInt(inp[1]),
    orientation: inp[2]
  }
  if (isFarLocation(location)){
    throw new Error("This position is so far!");
  }
  return location;
}

module.exports = {
  defineplanetSize,
  definePositionAndDirection,
  processRover
}