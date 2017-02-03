'use strict';

import React from 'react';
import {
    Text,
    View,
    ListView,
    NavigatorIOS
} from 'react-native';
import { Provider } from 'react-redux';

import RootContainer from './containers/RootContainer/container';
import { oauth, forceClient } from 'react-native-force';
import MapView from 'react-native-maps';
import mainStore from './appStore';
import codePush from 'react-native-code-push';

//Root component 
var App = React.createClass({
    getInitialState() {
        return {
            authenticated: false
        };
    },

    componentDidMount() {
        oauth.authenticate(
            () => {
                this.setState({authenticated:true});
                this.getCPKey();
            },
            function(error) {
                console.log('Failed to authenticate:' + error);
            }
        );
    },
    getCPKey() {
        //Retrieve the org's code push key from its custom settings and then check for updates
        var soql = "SELECT Staging_key_ios__c FROM CP_DEPLOYMENT_KEYS__c";
        forceClient.query(soql, (res) => {
            if(res.records){
                codePush.sync({ installMode: codePush.InstallMode.IMMEDIATE, deploymentKey: res.records[0].Staging_key__c });
            }
        }, (err) => {
            alert("Check for code push key failed with error: " + err);
        })
    },

    render() {
        if (!this.state.authenticated)
            return (<View/>); // Show splash screen if you have one
        return (
            <Provider store={mainStore} >
                <RootContainer />
            </Provider>
        ); 
    }
});

module.exports = App;