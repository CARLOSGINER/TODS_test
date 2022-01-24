
export const GET_DATA = "GET_DATA";
const SET_DATA = "SET_DATA";

export const getData = () =>({
    type: GET_DATA
})

export const setData = (data) =>({
    type: SET_DATA,
    data
})

export default (state={data:undefined},action) => {
    switch(action.type){
        case SET_DATA: {
            const {data} = action;
            return {data}
        }
        default:
            return state;
    }
}