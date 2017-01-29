
export const actionTypes = {
    OPEN_SIDEMENU: "OPEN_SIDEMENU",
    CLOSE_SIDEMENU: "CLOSE_SIDEMENU",
    SET_WINDOW_DIMENSIONS: "SET_WINDOW_DIMENSIONS"
}

export const set_dimensions = (h,w) => {
    return {
        type:actionTypes.SET_WINDOW_DIMENSIONS,
        height:h,
        width:w
    }
}

export const open_sidemenu = () => {
    return{
        type:actionTypes.OPEN_SIDEMENU
    }
}

export const close_sidemenu = () => {
    return{
        type:actionTypes.CLOSE_SIDEMENU
    }
} 