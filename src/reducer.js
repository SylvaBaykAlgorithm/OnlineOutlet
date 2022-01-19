    export const initialState = {
        bag: [],
    };



    //selector
    export const getBagTotal = (bag) => {
            bag?.reduce((amount,item) => item.price + amount, 0);

    };

    const reducer = (state, action) => {
        switch(action.type) {
            case "ADD_TO_BAG":
                return {
                    ...state,
                    bag:[...state.bag,action.item],
                };

            default: 
            return state;
        }
    };



export default reducer;
