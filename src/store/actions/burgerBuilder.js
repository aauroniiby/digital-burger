import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'


export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients
    }
}

export const fetchIngredientsFaild = () => {
    return {
        type: actionTypes.FETCH_INGREDIENT_FAILD
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-digital-burger.firebaseio.com/ingredients.json').then(response => {
            dispatch(setIngredients(response.data))
        }).catch(error => {
            dispatch(fetchIngredientsFaild())
        })
    }
}