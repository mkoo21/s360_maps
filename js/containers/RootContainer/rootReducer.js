import {actionTypes as MenuActions} from './actions';

const initialState = {
    sideMenuOpen: false,
    windowHeight: 0,
    windowWidth:0
}

export default (state = initialState, action) => {
    //handle actions
    switch(action.type){
        case MenuActions.OPEN_SIDEMENU:
            //TODO: Display the side menu 
            return {
                ...state,
                sideMenuOpen: true
            };
        case MenuActions.CLOSE_SIDEMENU:
            return {
                ...state,
                sideMenuOpen: false
            };
        case MenuActions.SET_WINDOW_DIMENSIONS:
            return {
                ...state,
                windowHeight:action.height,
                windowWidth:action.width
            }
        default:
            return state;
    }   
}