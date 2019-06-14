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

import Style,{color} from '../styles/Android.js'

class MenuGallery extends Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
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
                {/* <StatusBar barStyle="light-content" backgroundColor= {color.base}/> */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={Style.imageBuku}>
                        <Image resizeMode='cover' style={{height:'100%',width: '100%'}} source={require('../image/kawi.jpg')} />
                    </View>
                    <View style ={{marginTop: 30,}}/>
                    <TouchableOpacity style = {Style.buttonMenu} onPress = {()=> {this.props.navigation.push("FullGambar",{type:4,typename:'4D'})}}>
                        <View style ={Style.viewIcon}>
                            <Image resizeMode='cover' style={Style.imageButton} source={require('../image/book.png')} />
                        </View>
                        <View style ={Style.viewText}>
                            <Text style = {Style.textMenu}>4D</Text>
                            <Text style = {Style.textSub}>Kumpulan gambar dari buku mimpi 4D</Text>
                        </View>
                        <View style ={Style.viewArrow}>
                            <Image resizeMode='contain' style={Style.imageButton} source={require('../image/arrow.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style ={{marginTop : 10}}/>
                    <TouchableOpacity style = {Style.buttonMenu} onPress = {()=> {this.props.navigation.push("FullGambar",{type:3,typename:'3D'})}}>
                        <View style ={Style.viewIcon}>
                            <Image resizeMode='center' style={Style.imageButton} source={require('../image/book.png')} />
                        </View>
                        <View style ={Style.viewText}>
                            <Text style = {Style.textMenu}>3D</Text>
                            <Text style = {Style.textSub}>Kumpulan gambar dari buku mimpi 3D</Text>
                        </View>
                        <View style ={Style.viewArrow}>
                            <Image resizeMode='contain' style={Style.imageButton} source={require('../image/arrow.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style ={{marginTop : 10}}/>
                    <TouchableOpacity style = {Style.buttonMenu} onPress = {()=> {this.props.navigation.push("FullGambar",{type:2,typename:'2D'})}}>
                        <View style ={Style.viewIcon}>
                            <Image resizeMode='center' style={Style.imageButton} source={require('../image/book.png')} />
                        </View>
                        <View style ={Style.viewText}>
                            <Text style = {Style.textMenu}>2D</Text>
                            <Text style = {Style.textSub}>Kumpulan gambar dari buku mimpi 2D</Text>
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

export default MenuGallery
