import { combineReducers } from 'redux';
import MainList from './containers/MainList/MainListReducer';
import Root from './containers/RootContainer/rootReducer';

export default combineReducers({
    MainList,
    Root
});