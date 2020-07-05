import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const fetchCategories = () =>{
    return dispatch => {
        dispatch(fetchCategoriesStart())
        axios.get('/categories.json').then(res => {
            const fetchedCategories =[]
            console.log(res.data)
            for(let key in res.data){
                fetchedCategories.push({
                    ...res.data[key],
                    id:key
                })
            }
            dispatch(fetchCategoriesSuccess(fetchedCategories))
        }).catch(err => {
            dispatch(fetchCategoriesFail(err))
        })
    }
}

export const fetchCategoriesSuccess = (categories) =>{
    console.log("YOOOOOOOOOOOOOO")
    return{
        type: actionTypes.FETCH_CATEGORIES_SUCCESS,
        categories: categories
    }
}

export const fetchCategoriesFail = (error) =>{
    return{
        type: actionTypes.FETCH_CATEGORIES_FAIL,
        error: error
    }
}

export const fetchCategoriesStart = () =>{
    return{
        type: actionTypes.FETCH_CATEGORIES_START
    }
}