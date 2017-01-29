import { connect } from 'react-redux';
import SideMenu from '../../presentationals/SideMenu';
import { set_current_object } from '../MainList/actions';
import { close_sidemenu } from '../RootContainer/actions';

const mapStateToProps = (state) => {
    return {
        windowHeight: state.Root.windowHeight,
        windowWidth: state.Root.windowWidth
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentObject: (API_name) => {
            dispatch(set_current_object(API_name));
        },
        closeSideMenu: () => {
            dispatch(close_sidemenu());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);