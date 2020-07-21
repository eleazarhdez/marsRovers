const move = require('../src/movements');

const INITIAL_STATE = { x: 0, y: 0, orientation: "N", status: "WORKING" };

describe("Rover movements", () => {

  it("should move to North ", () => {
    const location = move.toNorth({currentPosition: INITIAL_STATE})
    expect(location.y).toBeGreaterThan(0);
  });
  it("should move to South ", () => {
    const location = move.toSouth({currentPosition: INITIAL_STATE})
    expect(location.y).toBeLessThan(0);
  });
  it("should move to East ", () => {
    const location = move.toEast({currentPosition: INITIAL_STATE})
    expect(location.x).toBeGreaterThan(0);
  });
  it("should move to West ", () => {
    const location = move.toWest({currentPosition: INITIAL_STATE})
    expect(location.x).toBeLessThan(0);
  });
});
