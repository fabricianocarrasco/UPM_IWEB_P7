import React from 'react';
import Question from './Question';
import Answer from './Answer';
import MyImage from './MyImage';
import Tips from './Tips'
import {View} from 'react-native';

export default class Content extends React.Component {
    render() {
        return (
            <View>
                <Question question = {this.props.question.question}/>
                <Answer question = {this.props.question} onQuestionAnswer = {this.props.onQuestionAnswer}/>
                <Tips tips={this.props.question.tips}/>
                <MyImage url = {this.props.question.attachment.url}/>
            </View>
        );
    }
}