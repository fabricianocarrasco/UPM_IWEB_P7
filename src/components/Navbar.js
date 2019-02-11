import React from 'react';
import {View, Text} from 'react-native';

export default class Navbar extends React.Component {
    render() {
        return (
                      <View style={{flex:1, flexDirection: 'row', alignItems:'stretch',justifyContent: 'space-between'}}>
            <View>
                <Text style={{fontSize:30, backgroundColor:'black', color:'white'}}>Quiz</Text>
            </View>
            <View>    
                <Text style={{fontSize:30, backgroundColor:'black', color:'white'}}>Puntuación: {this.props.score}</Text>
            </View>
                      </View>
        );
    }
}