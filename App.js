import React, {Component,PropTypes} from 'react';
import Routes from "./src/Routes.js";

import {
    View,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from 'react-native';

import Style,{color}from './src/styles/Android.js'

export default class App extends Component {  
    constructor(props) {
      super(props);
      this.state = {
          closeIklan : false,
          items: [],
          userPic : null,
          status:0,
          code:"",
          sourceStatus:false,
          isLoading:true,
      }
  }
    handleGetItem = async () => {
          fetch('http://kes.co.id/dev/dreambook/api/api/dreams/dream_banner',{method:"GET"})
            .then((response) => response.json())
            .then((responseJson)=>{
              if(responseJson.status == 1 && responseJson.code == "DB_SCS_0001"){
                this.setState({
                  sourceStatus  : true, 
                  isLoading     : false,
                  status        : responseJson.status,
                  code          : responseJson.code,
                  items         : responseJson.data,
                })
              }
              else{
                this.setState({
                  sourceStatus  : true, 
                  isLoading     : false,
                  status        : responseJson.status,
                  code          : responseJson.code,
                  items         : [],
                  userPic       : null
                })
              }
          });
      }
      componentDidMount(){
          this.handleGetItem();
      }
      
    render() {
      return (
        <View style={{ flex: 1 }}>
        <View style={{ flex: 1, position: 'relative' }}>
          <Routes />
        </View>
        {this.state.closeIklan === false ? 
            <TouchableOpacity style={Style.viewIklan}>
                {this.state.sourceStatus === false ? 
                  <ActivityIndicator
                      size="large"
                      style={{height: 60, width: 60,alignSelf: 'center',}}
                  />
                : 
                  <Image
                      resizeMode = 'contain'
                      source={{uri:this.state.items[0].banner_image}}
                      style={{height: '100%', width: '100%'}}
                  />
                }
                <TouchableOpacity 
                      style={Style.closeIklan} 
                      onPress={()=>{this.setState({closeIklan: true})}}>
                          <Image
                              source={require('./src/image/cancel.png')}
                              style={{height: '100%', width: '100%'}}
                          />
                </TouchableOpacity>
            </TouchableOpacity>
        :
          <></>
        }
        
      </View>
      );
    }
  
}



