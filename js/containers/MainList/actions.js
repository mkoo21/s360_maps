
export const actionTypes = {
    SELECT: "SELECT",
    RESET_SELECTED: "RESET_SELECTED",
    SET_RECORDS: "SET_RECORDS",
    SET_CURRENT_OBJECT: "SET_CURRENT_OBJECT"
}
export const select = (rowData) => {
    return {
        type: actionTypes.SELECT,
        rowData
    };
};

export const reset_selected = () => {
    return {
        type: actionTypes.RESET_SELECTED,
    };
};

export const set_records = (data) => {
    return {
        type: actionTypes.SET_RECORDS,
        data
    }
};

export const set_current_object = (API_name, nameField, descField) => {
    return {
        type: actionTypes.SET_CURRENT_OBJECT,
        API_name,
        nameField,
        descField
    }
};