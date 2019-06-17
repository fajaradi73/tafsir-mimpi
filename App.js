import React, {Component,PropTypes} from 'react';
import Routes from "./src/Routes.js";

import {
    View,
    TouchableOpacity,
    Image,
    
} from 'react-native';

export default class App extends Component {
  
  constructor(props) {
    super(props);
}
  render() {
    return (
      <View style={{ flex: 1 }}>
       <View style={{ flex: 1, position: 'relative' }}>
         <Routes />
       </View>
       <View style={{ position: 'absolute', bottom: 0, width: '100%', height: 50 ,borderWidth: 1,borderColor: 'black'}}>
          <Image
                resizeMode = 'contain'
                source={{uri: 'https://2.bp.blogspot.com/-Z9EJbtM6oxY/XMEjaTtXUaI/AAAAAAAACGs/06RqbdjZCcIcnTu4PaZ3XKBkNw0YsCmLACLcBGAs/s640/qq39-ano-24apr.gif'}}
                style={{height: '100%', width: '100%'}}
            />
          <TouchableOpacity style={{position: 'absolute',height : 20,backgroundColor: 'white',width : 20, right: 0, borderWidth : 1, borderColor : 'black',padding: 2,}}>
            <Image
                source={require('../TafsirMimpi/src/image/cancel.png')}
                style={{height: '100%', width: '100%'}}
            />
          </TouchableOpacity>
       </View>
     </View>
    );
  }
  
}



