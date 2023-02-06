export const initialState = {
    cart: [],
    user: null
};

export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item],
            };

        case "REMOVE_FROM_CART":
            const i = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );

            let newCart = [...state.cart];

            if (i >= 0) {
                newCart.splice(i, 1);
            } else {
                console.warn("No product to remove")
            }

            return {
                ...state,
                cart: newCart
            }
    
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        case "EMPTY_CART":
            return {
                ...state,
                cart: []
            }

        default:
            return state;
    }
};

export default reducer;