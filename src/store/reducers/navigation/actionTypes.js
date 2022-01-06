const names = {
  SET_NAVIGATION: 'SET_NAVIGATION',
  CLEAR_NAVIGATION: 'CLEAR_NAVIGATION'
};

const setNavigation = (payload) => ({
  type: names.SET_NAVIGATION,
  ...payload
});

const clearNavigation = (payload) => ({
  type: names.CLEAR_NAVIGATION,
  ...payload
});

export default {
  names,
  setNavigation,
  clearNavigation
};
