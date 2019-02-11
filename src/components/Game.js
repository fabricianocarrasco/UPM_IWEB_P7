import React from 'react';
import Actionbar from './Actionbar';
import Content from './Content';
import {View} from 'react-native';

export default class Game extends React.Component {
    render() {
        return (
            <View>
                <View>
                    <Content question = {this.props.question}  onQuestionAnswer = {this.props.onQuestionAnswer} />
                </View>
                <View>
                    <Actionbar questionIndex={this.props.questionIndex} onChangeQuestion = {this.props.onChangeQuestion} onSubmit={this.props.onSubmit}/>
                </View>


            </View>
        );
    }
}