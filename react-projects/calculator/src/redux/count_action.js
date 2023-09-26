/**
 * create action objects for count 
 * 
 * */
/** arrow function how to return an object */
import { INCREMENT,DECREMENT } from './constant'
export const createIncrementAction = data => ({type: INCREMENT,data})
   

export const createDecrementAction = data => ({type: DECREMENT,data})
    