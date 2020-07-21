const processor = require('../src/processor');

const INPUT_LINES = ["5 3", "1 1 E","RFRFRFRF", "3 2 N", "FRRFLLFFRRFLL", "0 3 W", "LLFFFLFLFL"];

describe("Integration Test", () => {

  it("Rovers should finalize with its status in a correct way ", () => {
    const rovers = processor.processRover(INPUT_LINES)
    expect(rovers[0].getRoverState().orientation).toBe("E");
    expect(rovers[1].getRoverState().status).toBe("LOST");
    expect(rovers[2].getRoverState().x).toBe(2);
  });

});