const CARDINAL_DIRECTIONS = require ('./constants');
const move = require ('./movements');
const turn = require ('./turns');
const useState = require ('./useState');

const isOut = (nextPosition, planetSize) => {
  return nextPosition.x > planetSize.x || nextPosition.y > planetSize.y;
};

const isBound = ({ currentPosition, bounds }) => {
  const foundedPositionIndex = bounds.findIndex(
    element => JSON.stringify(element) === JSON.stringify(currentPosition)
  );
  return foundedPositionIndex >= 0 ? true : false;

}


const MarsRover = props => {
  const { getState: getRoverState, setState: setRoverState } = useState({...props.initialState}); 

  const moveForward = () => {
    const { status, ...position } = getRoverState();

    if (isBound({ currentPosition: position, bounds: props.bounds })) {
      return;
    }
    const currentPosition = getRoverState();
    const MOVEMENTS = {
      [CARDINAL_DIRECTIONS.N]: move.toNorth({ currentPosition }),
      [CARDINAL_DIRECTIONS.S]: move.toSouth({ currentPosition }),
      [CARDINAL_DIRECTIONS.E]: move.toEast({ currentPosition }),
      [CARDINAL_DIRECTIONS.W]: move.toWest({ currentPosition })
    };

    const nextPosition = MOVEMENTS[currentPosition.orientation]

    if (isOut(nextPosition, props.planetSize)){
      setRoverState({ ...MOVEMENTS[currentPosition.orientation], status: "LOST" })
      const bound = {
        x: currentPosition.x,
        y: currentPosition.y,
        orientation: currentPosition.orientation
      };
      return props.setBoundFounded(bound)
    }
    setRoverState(nextPosition);
  };

  const turnRight = () => {
    const currentPosition = getRoverState();
    const MOVEMENTS = {
      [CARDINAL_DIRECTIONS.N]: turn.toEast({ currentPosition }),
      [CARDINAL_DIRECTIONS.S]: turn.toWest({ currentPosition }),
      [CARDINAL_DIRECTIONS.E]: turn.toSouth({ currentPosition }),
      [CARDINAL_DIRECTIONS.W]: turn.toNorth({ currentPosition })
    };
    setRoverState(MOVEMENTS[currentPosition.orientation]);
  };

  const turnLeft = () => {
    const currentPosition = getRoverState();
    const MOVEMENTS = {
      [CARDINAL_DIRECTIONS.N]: turn.toWest({ currentPosition }),
      [CARDINAL_DIRECTIONS.S]: turn.toEast({ currentPosition }),
      [CARDINAL_DIRECTIONS.E]: turn.toNorth({ currentPosition }),
      [CARDINAL_DIRECTIONS.W]: turn.toSouth({ currentPosition })
    };

    setRoverState(MOVEMENTS[currentPosition.orientation]);
  };

  const insertCommand = commandToParse => {
    const commandsInstruction = Array.from(commandToParse);
    commandsInstruction.forEach(instruction => commands[instruction]());
  };


  const commands = {
    F: () => moveForward(),
    R: () => turnRight(),
    L: () => turnLeft(),
    ...props.commands
  };

  return Object.freeze({ commands, getRoverState, setRoverState, insertCommand });
};

module.exports = {
  MarsRover,
  isOut,
  isBound
}
