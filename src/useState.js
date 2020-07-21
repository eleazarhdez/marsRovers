module.exports = (initialState) => {
  let state = initialState;
  const getState = () => state;
  const setState = newState => (state = newState);
  return Object.freeze({ getState, setState });
};
