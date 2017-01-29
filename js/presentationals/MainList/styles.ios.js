'use-strict';
import React from 'react';
import{
    StyleSheet,
    PixelRatio
} from 'react-native';
module.exports = StyleSheet.create({
    listContainer: {
        top:95,
        flex:1,
        marginLeft:10,
    },
    topBorder: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        height: 3 / PixelRatio.get(),
    },
    row: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 12,
    },
    cellBorder: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        // Trick to get the thinest line the device can displayfor
        height: 2 / PixelRatio.get(),
        marginLeft: 4,
    },
    mapButton: {
        width:50,
        height:25,
        top:80,
        left:20,
        position:'relative',
        backgroundColor:'#84aae8',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    mapText:{
        color:'white'
    }
});