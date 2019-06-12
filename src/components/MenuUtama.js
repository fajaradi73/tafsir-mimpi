import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar ,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    ActivityIndicator,
    AppRegistry
    
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import Style from '../styles/Android.js'
import SplashScreen from 'react-native-splash-screen';

class MenuUtama extends Component {

    constructor(props) {
        super(props);
        const { navigation } = this.props;
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    static navigationOptions = {
      title: 'Gunung Kawi 1001',
      headerStyle: {
        backgroundColor: '#00a8ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };

    render(){
        return(
            <View style={Style.rootContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={Style.imageView}>
                        <Image resizeMode='cover' style={{height:'100%',width: '100%'}} source={require('../image/kawi.jpg')} />
                    </View>
                    <View style ={{marginTop: 30,}}/>
                    <TouchableOpacity style = {Style.buttonMenu} onPress = {()=> this.props.navigation.push("BukuMimpi")}>
                        <View style ={Style.viewIcon}>
                            <Image resizeMode='cover' style={Style.imageButton} source={require('../image/search.png')} />
                        </View>
                        <View style ={Style.viewText}>
                            <Text style = {Style.textMenu}>Mencari</Text>
                            <Text style = {Style.textSub}>Cari arti mimpi kamu!</Text>
                        </View>
                        <View style ={Style.viewArrow}>
                            <Image resizeMode='contain' style={Style.imageButton} source={require('../image/arrow.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style ={{marginTop : 10}}/>
                    <TouchableOpacity style = {Style.buttonMenu}>
                        <View style ={Style.viewIcon}>
                            <Image resizeMode='center' style={Style.imageButton} source={require('../image/gambar.png')} />
                        </View>
                        <View style ={Style.viewText}>
                            <Text style = {Style.textMenu}>Lihat Gambar</Text>
                            <Text style = {Style.textSub}>Intip gambar dari mimpimu!</Text>
                        </View>
                        <View style ={Style.viewArrow}>
                            <Image resizeMode='contain' style={Style.imageButton} source={require('../image/arrow.png')} />
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
export default MenuUtama