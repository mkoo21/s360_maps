'use-strict';

import React from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';

var searchBar = React.createClass({
    getInitialState(){
        return {
            searchTerm: '',
            search: null //will be set to a function with a timeout on search
        };
    },
    handleChange(value){
        this.setState({searchTerm:value});
        if(this.state.search) clearTimeout(this.state.search)
        this.setSearchTimer();
    },
    setSearchTimer(){
        this.setState({
            search: setTimeout( () => {this.props.search(this.state.searchTerm)}, 500)
        });
    },
    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    autoFocus={false}
                    autoCorrect={false}
                    onChangeText={this.handleChange}
                    placeholder={'Search'}
                    placeholderTextColor={'gray'}
                    style={[styles.textInput, {width: Math.min(300, this.props.windowWidth / 2)}]}
                    value={this.state.searchTerm}
                />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        height:30, 
        marginLeft:15,
        borderColor:'black',
        borderWidth:1,
        borderRadius: 10
    },
    textInput: {
        fontSize:18,
        height:30,
        marginLeft:10
    }
});

module.exports = searchBar;