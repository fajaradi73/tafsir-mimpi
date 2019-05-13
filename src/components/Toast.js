import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

class Toast extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(-70)
    const show = this.props.show
    const message = this.props.message
    const type = this.props.type
    this.state = {
      showState: show,
      showMessage: message,
      showType: type,
      backColor: 'grey',
      textColor: 'white'
    }
  }

  componentDidMount(){
    if(this.state.showType == 'danger'){
      this.setState({backColor: 'red'})
    }else if(this.state.showType == 'warning'){
      this.setState({backColor: 'yellow'})
    }else if(this.state.showType == 'success'){
      this.setState({backColor: 'green'})
    }else{
      this.setState({backColor: 'grey'})
    }
    this.state.showState == 1? this.callToast(): this.closeToast();
  }

  componentDidUpdate(prevProps){
    if(prevProps != this.props){
      if(this.props.type == 'danger'){
        this.setState({backColor: 'red'})
      }else if(this.props.type == 'warning'){
        this.setState({backColor: 'yellow'})
      }else if(this.props.type == 'success'){
        this.setState({backColor: 'green'})
      }else{
        this.setState({backColor: 'grey'})
      }
      this.setState({ 
        showState: this.props.show,
        showMessage: this.props.message,
        textColor: this.props.text
      })
    }
    this.state.showState == 1? this.callToast(): this.closeToast();
  }

  callToast() {
    Animated.timing(
      this.animatedValue,
      { 
        toValue: 0,
        duration: 350
      }).start(this.closeToast())
  }
  
  closeToast() {
    setTimeout(() => {
      Animated.timing(
      this.animatedValue,
      { 
        toValue: -70,
        duration: 350
      }).start()
    }, 4000)
  }

  render() {
    return (
      <Animated.View  style={{ transform: [{ translateY: this.animatedValue }], height: 70, backgroundColor: this.state.backColor, position: 'absolute',left:0, top:0, right:0, justifyContent:  'center' }}>
        <Text style={{ marginLeft: 10,  color:this.state.textColor,  fontSize:16, fontWeight: 'bold' }}>
        {this.state.showMessage}
        </Text>
      </Animated.View>
    );
  }
}

export default Toast