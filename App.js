import React, {Component,PropTypes} from 'react';
import Routes from "./src/Routes.js";

import {
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import Style,{color}from './src/styles/Android.js'

export default class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
        closeIklan : false,
    }
}
  render() {
    return (
      <View style={{ flex: 1 }}>
       <View style={{ flex: 1, position: 'relative' }}>
         <Routes />
       </View>
       {this.state.closeIklan === false ? 
          <TouchableOpacity style={Style.viewIklan}>
              <Image
                    resizeMode = 'contain'
                    source={require('./src/image/sponsor.png')}
                    style={{height: '100%', width: '100%'}}
                />
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



