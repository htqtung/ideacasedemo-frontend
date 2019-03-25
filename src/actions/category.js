import ActionTypes from "./ActionTypes";
// import { fetchTestCategories } from '../models/TestData';
import API_ROOT from '../constants/AppConstants';

// ACTION CREATORS (Action creator functions)
export const categoriesAll_REQ = () => ({
    type: ActionTypes.CATEGORIES_ALL_REQ,
});

export const categoriesAll_OK = (categoryList) => ({
    type: ActionTypes.CATEGORIES_ALL_OK,
    // categoryList: categoryList OR
    categoryList //shorter
});

export const categoriesAll_X = () => ({
    type: ActionTypes.CATEGORIES_ALL_X,
});

//Helper function, real action function?
export function fetchAllCategories() { 
    return async (dispatch, getState) => {
        dispatch(categoriesAll_REQ());
        // const categoryList = fetchTestCategories();
        fetch(API_ROOT + '/category/all')
            .then(res => res.json())
            .then(resData => {
                dispatch(categoriesAll_OK(resData));
            })
            .catch(() => dispatch(categoriesAll_X));
        //error simulation
        // if(categoryList.length === 4) {
        //     dispatch(categoriesAll_X());
        // } else {
        //     dispatch(categoriesAll_OK(categoryList));
        // }
    }
};

//Action object creator functions
export const categoryAdd_REQ = () => ({
    type: ActionTypes.CATEGORY_ADD_REQ,
});

export const categoryAdd_OK = (category) => ({
    type: ActionTypes.CATEGORY_ADD_OK,
    category,
});

export const categoryAdd_X = () => ({
    type: ActionTypes.CATEGORY_ADD_X,
});

//Helper function, real action function?
export function addCategory(category) {
    return async (dispatch, getState) => {
        dispatch(categoryAdd_REQ());
        //Here would be some AJAX call with await...
        //... then some promises or so
        fetch(API_ROOT + '/category/add',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(category)
            }
        )
            .then(() => {
                dispatch(categoryAdd_OK());
                dispatch(fetchAllCategories());
            })
            .catch(() => dispatch(categoryAdd_X()))
        // if( !category.id || !category.name || !category.budget ) {
        //     dispatch(categoryAdd_X());
        // } else {
        //     dispatch(categoryAdd_OK(category));
        // }
    }
};

//Action object creator functions
export const categoryDelete_REQ = () => ({
    type: ActionTypes.CATEGORY_DEL_REQ,
});

export const categoryDelete_OK = (category) => ({
    type: ActionTypes.CATEGORY_DEL_OK,
    category,
});

export const categoryDelete_X = () => ({
    type: ActionTypes.CATEGORY_DEL_X,
});

//Helper function, real action function?
export function deleteCategory(category) { 
    return async (dispatch, getState) => {
        dispatch(categoryDelete_REQ());
        //Here would be some AJAX call with await...
        //... then some promises or so
        fetch(API_ROOT + '/category/delete',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(category)
            }
        )
            .then(() => {
                dispatch(categoryDelete_OK());
                dispatch(fetchAllCategories());
            })
            .catch(() => dispatch(categoryDelete_X()))
        // if( !category.id ) {
        //     dispatch(categoryDelete_X());
        // } else {
        //     dispatch(categoryDelete_OK(category));
        // }
    }
};