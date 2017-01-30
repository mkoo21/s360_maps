
'use-strict';

import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

var ListRow = React.createClass({
    set_current_object() {
        if(this.props.rowData.Object_API_Name__c) {
            //Set mainlist target object to the one referenced in this row, then close the sidemenu
            this.props.setCurrentObject(this.props.rowData.Object_API_Name__c, this.props.rowData.Object_Name_Field__c, this.props.rowData.Object_Desc_Field__c);
            this.props.closeSideMenu();
        }
    },
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.set_current_object}> 
                <Text style={styles.text}>  
                    {this.props.rowData.Object_Menu_Label__c}
                </Text> 
            </TouchableOpacity>
        );
    }
});

var styles = StyleSheet.create({
    container:{
        height:50,
        padding:20,
        flexDirection:'row',
        alignItems:'center'
    },
    text: {
        fontSize:15
    }
});

module.exports = ListRow;