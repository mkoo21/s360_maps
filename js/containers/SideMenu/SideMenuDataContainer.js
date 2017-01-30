import React from 'react';
import {
    ListView
} from 'react-native';
import SideMenu from '../../presentationals/SideMenu';
import {forceClient} from 'react-native-force';

//Data wrapper for the side menu
module.exports = React.createClass({
    getInitialState() {
        return {
            isFetching:true,
            categories: new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2}),
            configId: 'a0041000005NhKcAAK' //TODO: GET THIS FROM APP STATE
        };
    },
    componentDidMount(){
        var soql = "SELECT Object_API_Name__c, Object_Menu_Label__c, Object_Name_Field__c, Object_Desc_Field__c FROM Config_to_object__c WHERE Config_Id__c = '" + this.state.configId + "'";
        forceClient.query(soql, 
        (res) => {
            if(res.records){ 
                var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    categories: ds.cloneWithRows(res.records),
                    isFetching:false
                });
            }
        }, (err) => {
            console.log("Config query failed with error: " + err);
        });
    },
    render(){
        return(
            <SideMenu
                isFetching={this.state.isFetching}
                categories={this.state.categories}
                windowHeight={this.props.windowHeight}
                windowWidth={this.props.windowWidth}
                setCurrentObject={this.props.setCurrentObject}
                closeSideMenu={this.props.closeSideMenu}
            />
        );
    }
});