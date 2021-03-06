
'use-strict';

import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
                <LinearGradient style={styles.container} colors={['#ffffff', '#f2f2f2', '#e6e6e6']} start={{x:0.5,y:0}} end={{x:1.0,y:1.0}}>
                    <Text style={styles.text}>  
                        {this.props.rowData.Object_Menu_Label__c}
                    </Text> 
                </LinearGradient>
            </TouchableOpacity>
        );
    }
});

var styles = StyleSheet.create({
    container:{
        height:50,
        padding:20,
        flexDirection:'row',
        alignItems:'center',
        flex:1
    },
    text: {
        fontSize:20,
        fontFamily:'Apple SD Gothic Neo',
        paddingLeft:10,
        backgroundColor:'rgba(0,0,0,0)'
    }
});

module.exports = ListRow;