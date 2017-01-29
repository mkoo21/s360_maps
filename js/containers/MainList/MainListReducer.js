import {actionTypes as MainListActions} from './actions';

const initialState = {
    selected: [],
    listData: [],
    Object_API_Name: "Opportunity"
}

export default (state = initialState, action) => {
    //handle actions
    switch(action.type){
        case MainListActions.INIT_LIST_ARRAY:
            //initialize/fill an array size action.size with false
            if(action.size === 'undefined'){
                console.log('ACTION_ERROR: INIT_LIST_ARRAY dispatch could not find required array size');
                return state;
            }
            var newLogical = [];
            while(action.size--){
                newLogical.push(false);
            }
            return {
                ...state,
                selected: newLogical,

            }
        case MainListActions.SELECT:
            //Flip the selected value of this item
            if(action.index >= state.selected.length){
                console.log('ACTION_ERROR: SELECT dispatch attempted to flip out of bounds index');
                return state;
            } 
            newSelected = state.selected;
            newSelected[action.index] = !state.selected[action.index];
            return {
                ...state,
                selected: newSelected
            };
        case MainListActions.SET_RECORDS:
            //Store data associated with a new opportunity
            if(action.data === 'undefined') {
                console.log('ACTION_ERROR: Could not find an opportunity attached to ADD_RECORD dispatch');
                return state;
            }
            return {
                ...state,
                listData: action.data
            };
        case MainListActions.SET_CURRENT_OBJECT:
            return {
                ...state,
                Object_API_Name: action.API_name
            };

        default:
            return state;
    }   
}