import {CART_DATA} from '../type';

const initialState = {data: ''};

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_DATA: {
      return {...state, data: action?.payload};
    }

    default: {
      return state;
    }
  }
};

export default DataReducer;
