import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGRIDIENTS_FAILED
    }
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGRIDIENTS,
        ingredients: ingredients
    }
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://reacr-my-burger.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data))
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed())
            });
    }
};