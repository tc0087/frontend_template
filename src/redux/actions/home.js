export const homeSync = (param) => {
  return {
    type: 'HOME_SYNC',
    param,
  };
};

export const homeAsync = () => {
  return (dispatch, getState) => {};
};
