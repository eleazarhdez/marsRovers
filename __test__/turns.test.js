const turn = require('../src/turns');

const INITIAL_STATE = { x: 0, y: 0, orientation: "N", status: "WORKING" };

describe.only("Rover turns", () => {

  it("should turn to North ", () => {
    const toNorth = turn.toNorth({currentPosition: INITIAL_STATE})
    expect(toNorth.orientation).toBe("N");
  });
  it("should turn to South ", () => {
    const toSouth = turn.toSouth({currentPosition: INITIAL_STATE})
    expect(toSouth.orientation).toBe("S");
  });
  it("should turn to East ", () => {
    const toEast = turn.toEast({currentPosition: INITIAL_STATE})
    expect(toEast.orientation).toBe("E");
  });
  it("should turn to West ", () => {
    const toWest = turn.toWest({currentPosition: INITIAL_STATE})
    expect(toWest.orientation).toBe("W");
  });
});
