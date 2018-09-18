import {LOADING_CATS, FETCH_CATS} from '../types'

export function fetchCats(){
  return function(dispatch){
    dispatch({ type: LOADING_CATS });
    fetch('http://localhost:4000/db')
    .then(r=> r.json())
    .then(cats=>{
      dispatch({ type: FETCH_CATS, cats: cats.images });
    })
  }
}
