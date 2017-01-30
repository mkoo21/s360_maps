import { connect } from 'react-redux';
import SideMenu from './SideMenuDataContainer';
import { set_current_object } from '../MainList/actions';
import { close_sidemenu } from '../RootContainer/actions';

var configId = 'a0041000005NhKcAAK';

const mapStateToProps = (state) => {
    return {
        windowHeight: state.Root.windowHeight,
        windowWidth: state.Root.windowWidth
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentObject: (API_name, nameField, descField) => {
            dispatch(set_current_object(API_name, nameField, descField));
        },
        closeSideMenu: () => {
            dispatch(close_sidemenu());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);