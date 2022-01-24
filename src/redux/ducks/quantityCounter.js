const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const ADDTOCARTCOUNT  = 'ADDTOCARTCOUNT';

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
})

export const addToCartCount = () => ({
    type: ADDTOCARTCOUNT
})

const initialState = {
    count:0,
    cartCount:0
};

export default (state=initialState,action) => {
    switch (action.type) {
        case INCREMENT:
            return{...state,count:state.count +1}
        case DECREMENT:
            if(state.count>0){
                return{...state,count:state.count-1}
            }
            return state
        case ADDTOCARTCOUNT:
            return{...state,cartCount:state.count+state.cartCount}
        default: 
            return state
    }

}