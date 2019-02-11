import React from 'react';
import {View, TextInput} from 'react-native';

export default class Answer extends React.Component {
    render() {
        return (
            <View style={{alignItems:'center',heigth:100 }}>
                <TextInput style={{backgroundColor:'antiquewhite'}} value={this.props.question.userAnswer || ''}
                placeholder = {"Type your answer"}
                       onChangeText={(userAnswer)=>{
                           this.props.onQuestionAnswer(userAnswer);
                       }}
                />
            </View>
        );
    }
}