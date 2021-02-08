export function CartReducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const existItem = state.find((item) => item.id === action.payload.id);

      if (existItem) {
        return state.map((item) => {
          console.log(item.qty);
          if (item.id === action.payload.id) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });
      } else {
        return [...state, { ...action.payload, qty: 1 }];
      }

    case 'DELETE_PRODUCT':
      return state.filter((item) => item.id !== action.payload.id);

    case 'REDUCE_QTY':
      const quantity = action.payload.qty;
      if (quantity > 0) {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, qty: item.qty - 1 };
          }
          return item;
        });
      } else {
        return state.filter((item) => item.id !== action.payload.id);
      }
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}
