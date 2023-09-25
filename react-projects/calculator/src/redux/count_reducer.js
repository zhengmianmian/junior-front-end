/**
 * reducer is a function
 * it will receive two parameters
 * reducer doesn't care about if judgements
 * @param {*} preState
 * @param {*} action: a object
 */
const initState = 0;
export default function countReducer(preState=initState, action){
    const {type, data} = action;
    switch (type) {
        case 'increment':
            return preState + data;
        case 'decrement':
            return preState - data;
        // initialise
        default:
            return preState;
    }
}