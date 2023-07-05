import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        restaurants:[],
        //itemQuantity: 0,
    },
    reducers:{
        addItemToCart:(state, action) =>{
            const itemPresent = state.items.find(
                (item)=> {item.id === action.payload.id}
            );
            if(itemPresent){
                itemPresent.itemQuantity++;
            }else{
                state.items.push({
                    ...action.payload,
                    itemQuantity: 1,
                })
            }
        },
        incrementQuantity:(state, action) => {
            const itemPresent = state.items.find(
                (item) => {
                    item.id ===action.payload.id
            })

            itemPresent && itemPresent.itemQuantity++;
        },
        decrementQuantity: (state, action) =>{
            const itemPresent = state.items.find((item) => {item.id === action.payload.id})

            if(itemPresent.itemQuantity === 1){
                //if item quantity is 1, remove that  item from items array
                const removeItem = state.items.find(
                    (item) =>{ item.id !== action.payload.id})
                    state.items = removeItem;
            }else{
                item.itemQuantity--;
            }
        },
        addRestaurants:(state, action) => {
            state.restaurants.push(action.payload);
        },
        removeItemFromCart: (state, action) => {},
        clearCart: (state, action) => {
            state.items = []; //clear the items array
        }
    }
});

//exports
export const{
    addItemToCart,
    removeItemFromCart,
    clearCart,
    addRestaurants,
    incrementQuantity,
    decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;