import React from 'react';
import {View, Text, FlatList} from 'react-native';

export default class Tips extends React.Component {
    render() {
        return (
            <View>
            
                 <FlatList data={this.props.tips} renderItem={({item})=>
                    <Text key={item.toString()}> {item} </Text>
                }/>
             

            </View>
        );
    }
}