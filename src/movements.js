const toNorth = ({ currentPosition }) => ({
  ...currentPosition,
  y: currentPosition.y + 1
});
const toSouth = ({ currentPosition }) => ({
  ...currentPosition,
  y: currentPosition.y - 1
});
const toEast = ({ currentPosition }) => ({
  ...currentPosition,
  x: currentPosition.x + 1
});
const toWest = ({ currentPosition }) => ({
  ...currentPosition,
  x: currentPosition.x - 1
});

module.exports = {
  toNorth,
  toSouth,
  toEast,
  toWest
};
