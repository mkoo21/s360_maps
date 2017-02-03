'use-strict';

import React from 'react';
import {
    View,
    Text,
    ListView,
    TouchableOpacity
} from 'react-native';
import styles from './styles.ios';

import ListRow from './ListRow';
import SearchBar from './Searchbar';
import {net, oauth} from 'react-native-force';

import map from '../map';

var MainList = React.createClass({
    getInitialState() {
        return {
            Object_API_Name: null,
            rawData: [],
            dataSource: null,
            isFetching: true,
            filterSelected:false
        }
    },
    componentWillMount(){
        this.props.resetSelected;
        this.setTargetObject();
    },
    setTargetObject(searchTerm = null){
        var soql = 'SELECT Id, '+ this.props.nameField + ', ' + this.props.descField + ', Main_Office__Latitude__s, Main_Office__Longitude__s FROM ' + this.props.Object_API_Name;
        if(searchTerm) soql += " WHERE " + this.props.nameField + " LIKE '%" + searchTerm + "%'";
        net.query(soql,
            (response) => {
                var records = response.records;
                var data = [];
                for (var i in records) {
                    data.push({ 
                        SFID: records[i].Id,  // let this be primary key
                        name: records[i][this.props.nameField],
                        desc: records[i][this.props.descField],
                        latitude: records[i].Main_Office__Latitude__s,
                        longitude: records[i].Main_Office__Longitude__s,
                        index: i
                    });
                }
                this.props.setRecords(data);

                //set datasources
                var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    Object_API_Name: this.props.Object_API_Name,
                    dataSource: ds.cloneWithRows(data),
                    isFetching: false
                });
            }
        );
    },
    openMap(){
        var markers = [];
        for(var i in this.props.selected){
            if(this.props.selected[i].isSelected){
                markers.push({
                    title: this.props.selected[i].name,
                    latlng: {
                        latitude: this.props.selected[i].latitude,
                        longitude: this.props.selected[i].longitude
                    },
                    key: this.props.selected[i].SFID
                });
            }
        }
        this.props.navigator.push({
            title:'S360 Maps',
            component: map,
            leftButtonTitle:'Back',
            onLeftButtonPress: () => {this.props.navigator.pop()},
            rightButtonTitle:'Logout',
            onRightButtonPress: () => {oauth.logout()},
            markers: markers
        });
    },
    getSelectedStatus(SFID){
        if(!(SFID in this.props.selected)) return false;
        else return this.props.selected.SFID.isSelected;
    },
    filterSelected(){
        if(!this.state.selected){ //we are switching from state 'do not filter' to 'filter' -> implement filter logic in this transition
            
        }
        //Flip state
        this.setState({
            filterSelected : !this.state.filterSelected
        })
    },
    render() {
        if(this.state.Object_API_Name != this.props.Object_API_Name) this.setTargetObject();
        if(this.state.isFetching) return null
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (
            <View style={styles.page}>
                <View style={styles.navbarPadding} />
                <View style={styles.rowApart}>
                    <View style={styles.row}>
                        <SearchBar windowWidth={this.props.windowWidth} search={this.setTargetObject} />
                        <TouchableOpacity style={styles.mapButton} onPress={this.openMap}>
                            <Text style={styles.mapText}> Map </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={ styles.selectedFilter } onPress={() => this.setState({ filterSelected : !this.state.filterSelected})}>
                        <Text style={ !this.state.filterSelected ? styles.selectFilterText : [styles.selectFilterText, styles.highlightedSelectFilterText] }> Selected </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer} >
                    <View style={styles.topBorder} />
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                        enableEmptySections={true}
                        automaticallyAdjustContentInsets={false}
                        />
                </View>
            </View>    
      );
    },

    renderRow(rowData) {
        var rowIsSelected = rowData.SFID in this.props.selected && this.props.selected[rowData.SFID].isSelected;
        return (
                <View>
                    <ListRow rowData={rowData} changeSelection={this.props.changeSelection} getSelectedStatus={this.getSelectedStatus} filterSelected={this.state.filterSelected} rowIsSelected={rowIsSelected} />
                    <View style={styles.cellBorder} />
                </View>
        );
    }
});

module.exports = MainList;