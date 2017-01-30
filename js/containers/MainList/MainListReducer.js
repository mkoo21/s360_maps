import {actionTypes as MainListActions} from './actions';

const initialState = {
    selected: {},
    listData: [],
    Object_API_Name: "Opportunity",
    nameField: "Name",
    descField: "Description"
}

export default (state = initialState, action) => {
    //handle actions
    switch(action.type){
        case MainListActions.SELECT:
            //If an entry for this SFID does not exist, create it and set it to true. Else flip its value
            newSelected = state.selected;
            if(!(action.rowData.SFID in state.selected)){
                newSelected[action.rowData.SFID] = action.rowData;
                newSelected[action.rowData.SFID].isSelected = true;
            } 
            else {
                newSelected[action.rowData.SFID].isSelected = !state.selected[action.rowData.SFID].isSelected;
            }
            return {
                ...state,
                selected: newSelected
            };
        case MainListActions.RESET_SELECTED:
        return {
            ...state,
            selected: {}
        }
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
                Object_API_Name: action.API_name,
                nameField: action.nameField || "Name",
                descField: action.descField || "Description"
            };
        default:
            return state;
    }   
}