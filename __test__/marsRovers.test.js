const { MarsRover, isOut, isBound } = require('../src/marsRovers');

const INITIAL_STATE = { x: 0, y: 0, orientation: "N", status: "WORKING" };
const PLANET_SIZE = [10, 10];
describe("Rover movement", () => {
  const rover = MarsRover({
    initialState: INITIAL_STATE,
    planetSize: PLANET_SIZE,
    bounds: [],
    setBoundFounded: jest.fn(),
    commands: []
  });

  it("should move forward when receive an F command", () => {
    expect(rover.getRoverState().x).toBe(0);
    expect(rover.getRoverState().y).toBe(0);
    expect(rover.getRoverState().orientation).toBe("N");
    rover.insertCommand("F");
    expect(rover.getRoverState().x).toBe(0);
    expect(rover.getRoverState().y).toBe(1);
    expect(rover.getRoverState().orientation).toBe("N");
  });
});

describe("IsBound", () => {
  const BOUNDS = [
    { x: 0, y: 25, orientation: "N" },
    { x: 30, y: 18, orientation: "S" },
    { x: 10, y: 4, orientation: "E" }
  ];
  it("should return true if the position is inside bounded array", () => {
    const result = isBound({
      currentPosition: { x: 0, y: 25, orientation: "N" },
      bounds: BOUNDS
    });
    expect(result).toBe(true);
  });

  it("should return false if the position is not inside bounded array", () => {
    const result = isBound({
      currentPosition: { x: 0, y: 0, orientation: "N" },
      bounds: BOUNDS
    });
    expect(result).toBe(false);
  });
});

