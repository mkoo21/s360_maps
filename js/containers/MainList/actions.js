
export const actionTypes = {
    SELECT: "SELECT",
    INIT_LIST_ARRAY: "INIT_LIST_ARRAY",
    SET_RECORDS: "SET_RECORDS",
    SET_CURRENT_OBJECT: "SET_CURRENT_OBJECT"
}
export const select = (index) => {
    return {
        type: actionTypes.SELECT,
        index
    };
};

export const init_list_array = (size) => {
    return {
        type: actionTypes.INIT_LIST_ARRAY,
        size
    };
};

export const set_records = (data) => {
    return {
        type: actionTypes.SET_RECORDS,
        data
    }
}

export const reset_selections = () => {
    return {
        //TODO?
        type: "asdf"
    }
} 

export const set_current_object = (API_name) => {
    return {
        type:actionTypes.SET_CURRENT_OBJECT,
        API_name
    }
}