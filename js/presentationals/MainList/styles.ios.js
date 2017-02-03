'use-strict';
import React from 'react';
import{
    StyleSheet,
    PixelRatio
} from 'react-native';

module.exports = StyleSheet.create({
    page: {
        flex:1,
        flexDirection:'column'
    },  
    navbarPadding: {
        height:100
    },
    listContainer: {
        flex:1,
        marginLeft:10,
        marginRight:10
    },
    topBorder: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        height: 3 / PixelRatio.get()
    },
    row: {
        flexDirection:'row',
        height:60
    },
    rowApart: {
        flexDirection:'row',
        height:60,
        justifyContent:'space-between'
    },
    cellBorder: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        // Trick to get the thinest line the device can display for
        height: 2 / PixelRatio.get(),
        marginLeft: 20,
        marginRight: 20
    },
    mapButton: {
        width:50,
        height:25,
        left:20,
        position:'relative',
        backgroundColor:'#84aae8',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    mapText:{
        color:'white'
    },
    selectedFilter:{
        marginTop:5,
        marginRight:20,
        height:25,
        width:90
    },

    selectFilterText:{
        fontSize:15,
        color:'gray'
    },
    highlightedSelectFilterText:{
        color:'#84aae8',
        fontWeight:'bold',
        fontSize:18        
    }
});