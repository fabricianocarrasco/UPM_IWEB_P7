import React from 'react';
import MyButton from './MyButton';
import{View} from 'react-native' 

export default class Actionbar extends React.Component {
    render() {
        return (
            <View>
                <View>
                <MyButton value={"Back"} questionIndex = {this.props.questionIndex} onChangeQuestion={this.props.onChangeQuestion}/>
               </View> 
               <View>
                <MyButton value={"Next"} questionIndex = {this.props.questionIndex} onChangeQuestion={this.props.onChangeQuestion}/>
                </View>
                <View>
                <MyButton value={"Submit"} questions = {this.props.questions} onSubmit={this.props.onSubmit}/>
            	</View>

            </View>
        );
    }
}