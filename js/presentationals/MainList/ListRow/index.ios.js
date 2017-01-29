
'use-strict';
import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

module.exports = React.createClass({
    //State can be controlled from redux store and passed down as a prop
    getInitialState(){
        return{ 
            selected:false
        }
    },
    componentWillReceiveProps(nextprops){
        //Works since new rows are always initiated as selected = false
        if(this.props.rowData.name != nextprops.rowData.name){
            this.setState({
                selected:false
            });
        }
    },
    handlePress(){
        var nextState = !this.state.selected
        this.setState({
            selected: nextState
        });
        this.props.changeSelection(this.props.rowData.index);
    },
    render() {
        return (
            <TouchableOpacity 
                onPress={this.handlePress} 
                style={ this.state.selected ? [styles.container, styles.selectedContainer] : styles.container }>
                <Text 
                    style={ this.state.selected ? styles.selectedText : styles.text } 
                    numberOfLines={1}> 
                    {this.props.rowData.name} 
                </Text>
            </TouchableOpacity>
        );
            
    }
});

var styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        //backgroundColor: 'white',
        flexDirection: 'row',
        padding: 12,
    },
    text:{
        
    },
    selectedContainer:{
        backgroundColor:'#4286f4'
    },
    selectedText:{
        color:'white',
        fontWeight:'bold'
    }
});