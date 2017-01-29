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
import {net, oauth} from 'react-native-force';

import map from '../map';

var MainList = React.createClass({
    getInitialState() {
        return {
            Object_API_Name: null,
            rawData: [],
            dataSource: null,
            isFetching: true
        }
    },
    componentWillMount(){
        this.setTargetObject();
    },
    componentWillReceiveProps(nextprops) {
        if(this.state.Object_API_Name != nextprops.Object_API_Name) this.setTargetObject(); // misleading name
        // the important part is the datasource (diff datasource)
    },
    setTargetObject(){

        var soql = 'SELECT Id, Name, Main_Office__Latitude__s, Main_Office__Longitude__s FROM ' + this.props.Object_API_Name;
        net.query(soql,
            (response) => {
                var records = response.records;
                var data = [];
                for (var i in records) {
                    data.push({ 
                        name: records[i].Name,
                        latitude: records[i].Main_Office__Latitude__s,
                        longitude: records[i].Main_Office__Longitude__s,
                        index: i
                    });
                }
                this.props.setRecords(data);
                this.props.initializeSelectArray(records.length);

                //set datasources
                var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    Object_API_Name : this.props.Object_API_Name,
                    dataSource : ds.cloneWithRows(data),
                    isFetching: false
                });
            }
        );
    },
    openMap(){
        var markers = [];
        for(var i in this.props.selected){
            if(this.props.selected[i]){
                markers.push({
                    title:this.props.listData[i].name,
                    latlng: {
                        latitude: this.props.listData[i].latitude,
                        longitude: this.props.listData[i].longitude
                    },
                    key: this.props.listData[i].index
                })
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

    render() {
        if(this.state.isFetching) return null
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (
            <View style={{flex:1}}>
                <TouchableOpacity style={styles.mapButton} onPress={this.openMap}>
                    <Text style={styles.mapText}> Map </Text>
                </TouchableOpacity>
                <View style={styles.listContainer}>
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
        return (
                <View>
                    <ListRow rowData={rowData} changeSelection={this.props.changeSelection}/>
                    <View style={styles.cellBorder} />
                </View>
        );
    }
});

module.exports = MainList;