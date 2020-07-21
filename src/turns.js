const  CARDINAL_DIRECTIONS = require('./constants');

const toNorth = ({ currentPosition }) => ({
  ...currentPosition,
  orientation: CARDINAL_DIRECTIONS.N
});
const toSouth = ({ currentPosition }) => ({
  ...currentPosition,
  orientation: CARDINAL_DIRECTIONS.S
});
const toEast = ({ currentPosition }) => ({
  ...currentPosition,
  orientation: CARDINAL_DIRECTIONS.E
});
const toWest = ({ currentPosition }) => ({
  ...currentPosition,
  orientation: CARDINAL_DIRECTIONS.W
});

module.exports = {
  toNorth,
  toSouth,
  toEast,
  toWest
};
