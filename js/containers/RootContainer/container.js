import { connect } from 'react-redux'; 
import RootComponent from '../../presentationals/RootComponent';
import {open_sidemenu, close_sidemenu, set_dimensions} from './actions';

const mapStateToProps = (state) => {
    return {
        sideMenuOpen: state.Root.sideMenuOpen
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        openSideMenu: () => {
            dispatch(open_sidemenu());
        },
        closeSideMenu: () => {
            dispatch(close_sidemenu()); 
        },
        setDimensions: (h, w) => {
            dispatch(set_dimensions(h,w));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);