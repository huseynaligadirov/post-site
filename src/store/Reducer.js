const initialState = {
  cart: [],
  user: {},
};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;

    case "USER_INFO":
      return {
        ...state, user: {
          name: action.payload.name,
          surname: action.payload.surname,
          number: action.payload.number
        }
      }
  }
}
