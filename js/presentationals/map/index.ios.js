
'use-strict';

import React from 'react';
import {
    View
} from 'react-native';
import MapView from 'react-native-maps';

var map = React.createClass({
    //43.7604172,-79.4093208
    onRegionChange(region){
        this.setState({ region });
    },
    render(){
        //calculate initial region
        var lats = [];
        var longs = [];
        for(var i in this.props.route.markers){
            lats.push(this.props.route.markers[i].latlng.latitude);
            longs.push(this.props.route.markers[i].latlng.longitude);
        }
        var region = {
            latitude: (Math.max.apply(null,lats) + Math.min.apply(null,lats)) / 2,
            longitude: (Math.max.apply(null,longs) + Math.min.apply(null,longs)) / 2,
            latitudeDelta: (Math.max.apply(null,lats) - Math.min.apply(null,lats)) * 1.5,
            longitudeDelta: (Math.max.apply(null,longs) - Math.min.apply(null,longs)) * 1.5
        };
        return(
            <MapView 
                initialRegion={region}
                onRegionChange={this.onRegionChange}
                style={{flex:1}}>

                {this.props.route.markers.map((marker) => {
                    return(
                        <MapView.Marker 
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={"placehodler"}
                            key={marker.key}
                            />
                    );
                })}
            </MapView>
        );
    }
});

module.exports = map;