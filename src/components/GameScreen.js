import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from "./Game";
import Navbar from "./Navbar";
import {changeQuestion, initQuestions, questionAnswer, submit, fetching, reset, decrementTimer} from "../redux/actions";
import MyButton from "./MyButton";
import {View, Text, FlatList} from 'react-native';

class GameScreen extends Component {
    componentDidMount(){
        this.props.dispatch(fetching(true));
        this.fetchQuestions();
        setInterval(()=>{
            this.props.dispatch(decrementTimer());
        },1000)
    }
 /*   componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.timer === 0) {
            this.endTimer();
        }
    }
*/
    fetchQuestions(){
        fetch('https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=f6ecb1ed58ae7a2e0491').then((resp)=>
                resp.json()).then(json=> {
            this.props.dispatch(initQuestions(json));
            this.props.dispatch(fetching(false));
        }).catch(error => console.log(error));

    }
    endTimer(){
        this.props.dispatch(submit(this.props.questions));
    }
  render() {
      if (!this.props.finished) {
          if (this.props.fetching){
              return(
              <View style={{flex:1, justifyContent:'space-around', alignItems:'center'}}>
                    <Text style={{fontSize:60}}>Cargando</Text>
              </View>
              )
          }else{
              /*console.log(this.props.questions);
              */
              return (
                  <View style={{flex:1, flexDirection: 'column', justifyContent:'flex-start', backgroundColor:'azure'}}>
                      <View style={{flex:1, backgroundColor:'black'}}>
                        <Navbar score={this.props.score}/>
                      </View>
                      <View style={{flex:1, backgroundColor:'white', alignItems:'center'}}>
                        <Text style={{fontSize:30, color:'red'}}>{this.props.timer === 0 ? this.endTimer() : this.props.timer}</Text>
                      </View>
                      <View style={{flex:10, backgroundColor:'white'}}>
                      <Game question={this.props.questions[this.props.currentQuestion]}
                            questionIndex={this.props.currentQuestion}
                            onQuestionAnswer={(answer) => {
                                this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                            }}
                            onChangeQuestion={(index) => {
                                this.props.dispatch(changeQuestion(index))
                            }}
                            onSubmit={() => {
                                this.props.dispatch(submit(this.props.questions))
                            }}
                            onInitQuestions={(questions) => {
                                this.props.dispatch(initQuestions(questions))
                            }}
                      />
                      </View>
                  </View>
              );
          }
      }else{
          return(
                <View style={{flex:1, justifyContent:'space-around', alignItems:'center', backgroundColor:'azure'}}>

                <View style={{flex:6, justifyContent:'space-around', alignItems:'center'}}>
                 <Text style={{fontSize:45}}>Puntuación: {this.props.score}</Text>
                 </View>
                <View style={{flex:2, justifyContent:'space-around', alignItems:'center'}}>

                  <MyButton value='Reset' resetQuestions={() => {
                      this.props.dispatch(reset());
                      this.props.dispatch(fetching(true));
                      this.fetchQuestions();
                  }}/>
                  <MyButton value={'Play more'} playMore={() => {
                      this.props.dispatch(fetching(true));
                      this.fetchQuestions();}}/>
                    </View>

              </View>
          )
      }
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(GameScreen);
