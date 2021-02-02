import { homeState } from '../states/home';

const reducer = (state = homeState, action) => {
  switch (action.type) {
    case 'HOME_SYNC':
      console.log('HOME SYNC');
      return state;
    default:
      return state;
  }
};

export default reducer;
