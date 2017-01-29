'use strict';

import React from 'react';
import {
    Text,
    View,
    ListView,
    NavigatorIOS
} from 'react-native';
import { Provider } from 'react-redux';

import SideMenu from '../../containers/SideMenu/SideMenuContainer';
import MainList from '../../containers/MainList/mainListContainer';
import {oauth, net} from 'react-native-force';
import MapView from 'react-native-maps';
import styles from './styles.ios';
import mainStore from '../../appStore';

//Root component 
var App = React.createClass({
    getInitialState(){
        return {
            orientation: 0, //hacky - 0 means 'initial' orientation (on mount)
        }
    },
    setDimensions(event){
        this.props.setDimensions(event.nativeEvent.layout.height, event.nativeEvent.layout.width);
    },
    render() {
        return (
            <Provider store={mainStore} >
                <View style={styles.container} onLayout={ (event) => this.setDimensions(event) }>
                    <NavigatorIOS
                        ref='nav'
                        style={styles.container}
                        initialRoute={{
                            title: 'S360 Maps',
                            component: MainList,
                            leftButtonTitle:'Menu',
                            onLeftButtonPress: () => this.props.openSideMenu(),
                            rightButtonTitle:'Logout',
                            onRightButtonPress: () => oauth.logout()
                        }}
                    />
                    { this.props.sideMenuOpen ? <SideMenu closeSideMenu={this.props.closeSideMenu} /> : null }
                </View>
            </Provider>
        ); 
    }
});


module.exports = App;