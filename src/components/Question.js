import React from 'react';
import {View, Text} from 'react-native';

export default class Question extends React.Component {
    render() {
        return (
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:30}}>{this.props.question}</Text>
            </View>
        );
    }
}