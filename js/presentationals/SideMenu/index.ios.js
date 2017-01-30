'use-strict';

import React from 'react';
import { 
    View, 
    Image,
    ListView,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    Animated
} from 'react-native';

import ListRow from './ListRow';

//Presentational component for MainList
var SideMenu = React.createClass({
    renderRow (rowData) {
        return (<ListRow rowData={rowData} setCurrentObject={this.props.setCurrentObject} closeSideMenu={this.props.closeSideMenu} />)
    },
    render(){
        if(this.props.isFetching) return null;
        return ( 
            <View style={styles.page} onLayout={() => this.forceUpdate()}>
                <TouchableOpacity style={[styles.backgroundFilter, {height:this.props.windowHeight, width:this.props.windowWidth}]} onPress={this.props.closeSideMenu} onLayout={ () => this.forceUpdate()}/>
                <View style={[
                    styles.menu, 
                    {   
                        height: this.props.windowHeight,
                        width: Math.min(300, this.props.windowWidth / 2)
                    }
                ]}>
                    <View style={styles.logoContainer}> 
                        <Image source={require('../../../static/logo-template-256.jpg')} style={styles.logo} /> 
                    </View>
                    <View style={styles.categoryList}>
                        <ListView 
                            dataSource = {this.props.categories}
                            renderRow={this.renderRow} />
                    </View> 
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    //loosely inspired by google maps
    page : {
        position:'absolute',
        top:0,
        left:0,
        flex:1
    },
    backgroundFilter: {
        position:'absolute',
        top:0,
        left:0,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    menu: {
        position:'absolute',
        top:0,
        left:0,
        backgroundColor:'white'
    },
    logoContainer: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    logo : {
        height:80,
        width:80
    },
    categoryList: {
        flex:5
    }
})
module.exports = SideMenu;