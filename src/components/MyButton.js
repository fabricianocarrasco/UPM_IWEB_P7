import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements'

export default class MyButton extends React.Component {
    render() {
        return (
            <View>
                <Button buttonStyle={{
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5
                    }}    
                    title = {this.props.value || ''} onPress={()=>{
                    switch (this.props.value) {
                        case'Back':
                            return this.props.onChangeQuestion(this.props.questionIndex - 1);
                        case'Submit':
                            return this.props.onSubmit();
                        case'Next':
                            return this.props.onChangeQuestion(this.props.questionIndex + 1);
                        case 'Reset':
                            return this.props.resetQuestions();
                        case 'Play more':
                            return this.props.playMore();
                        default:
                            return 0;
                    }
                }}  />
            </View>
        );
    }
}