import {LOADING_CATS, LOADED_CATS} from '../types';


export const catsReducer = (state = [], action)=>{
  switch (action.type){
    case 'LOADING_CATS':
      return []

    case 'FETCH_CATS':
      return [...action.cats]

    default:
      return state
  }
}
