
'use-strict';
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    componentDidMount(){
        this.setState({
            selected: this.props.getSelectedStatus(this.props.rowData.SFID)
        });
    },
    handlePress(){
        var nextState = !this.state.selected
        this.setState({
            selected: nextState
        });
        this.props.changeSelection(this.props.rowData);
    },
    render() {
        if(this.props.filterSelected && !this.props.rowIsSelected) return null;
        return (
            <TouchableOpacity 
                onPress={this.handlePress} 
                style={ this.state.selected ? [styles.container, styles.selectedContainer] : styles.container } >
                <View style={styles.horizontalView} >
                    <View style={styles.verticalView} >
                        <Text 
                            style={ this.state.selected ? styles.selectedName : styles.nameText } 
                            numberOfLines={1} > 
                            {this.props.rowData.name} 
                        </Text>
                        <Text
                            style={ this.state.selected ? styles.selectedDesc : styles.descText } 
                            numberOfLines={1}>
                            {this.props.rowData.desc ? this.props.rowData.desc : "No Description"}
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name='info-circle' size={30} color={ this.state.selected ? 'white': 'gray'} style={{paddingRight:10}}/>
                    </TouchableOpacity>
                </View>
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
    horizontalView:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
        alignItems:'center'
    },
    verticalView: {
        height: 60,
        flexDirection:'column'
    },
    nameText:{
        fontSize:20,
        paddingBottom:10,
        paddingLeft:10
    },
    descText: {
        fontSize:15,
        color:'gray',
        paddingLeft:10
    },
    selectedContainer:{
        backgroundColor:'#4286f4'
    },
    selectedName:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        paddingBottom:10,
        paddingLeft:10
    },
    selectedDesc:{
        color:'white',
        fontSize:15,
        paddingLeft:10
    },
    infoIcon:{
        paddingRight:10,

    }
});