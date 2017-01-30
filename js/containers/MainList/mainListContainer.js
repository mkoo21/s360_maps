import { connect } from 'react-redux';
import MainList from '../../presentationals/MainList';
import {select, init_list_array, set_records, set_current_object} from './actions';


const mapStateToProps = (state) => {
    return {
        selected: state.MainList.selected,
        listData: state.MainList.listData,
        Object_API_Name: state.MainList.Object_API_Name,
        nameField: state.MainList.nameField,
        descField: state.MainList.descField,
        windowWidth: state.Root.windowWidth
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetSelected: () => {
            dispatch(reset_selected());
        },
        changeSelection: (rowData) => {
            dispatch(select(rowData));
        },
        setRecords: (data) => {
            dispatch(set_records(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainList);