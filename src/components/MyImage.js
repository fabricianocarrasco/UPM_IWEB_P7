import React from 'react';
import {View, Image} from 'react-native';

export default class MyImage extends React.Component {
    render() {
        return (
            <View style={{alignItems:'center'}}>
                    <Image style={{width:209, height:200}} source= {{uri: this.props.url}} />
            </View>
        );
    }
}