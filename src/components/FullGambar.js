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
    AppRegistry,
    TouchableWithoutFeedback
    
} from 'react-native';

import Style,{color}from '../styles/Android.js'
import GallerySwiper from "react-native-gallery-swiper";
import ImageLayout from "react-native-image-layout";


class FullGambar extends Component {

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const type      = navigation.getParam('type', '');
        const typename  = navigation.getParam('typename', '');
        const id        = navigation.getParam('id','');
        this.state = {
            items: [],
            userType  :4,
            userSearch: "",
            userPic : null,
            status:0,
            code:"",
            sourceStatus:false,
            isLoading:true,
            type : type,
            typename : typename,
            item : navigation.state.params,
            id: id,
        }
    }

    static navigationOptions = {
        title: 'Kumpulan gambar',
        headerStyle: {
            backgroundColor: '#00a8ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    setDetailMenu = (Data) => {
            this.props.navigation.push("DetailMenu",Data)
    }

    handleGetItem = async () => {
        fetch('http://kes.co.id/dev/dreambook/api/api/dreams/dream_image?dream_type='+this.state.type,{method:"GET"})
          .then((response) => response.json())
          .then((responseJson)=>{
            if(responseJson.status == 1 && responseJson.code == "DI_SCS_0001"){
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

    _renderPageHeader = (image, index, onClose) => {
        // Individual image object data.
        return (
            <View>
                {/*
                    onClose params (third params) is a function
                    that will close the gallery.
    
                    Swiping up and down animations for closing the
                    gallery is only compatible with iOS at
                    the moment.  It will be compatible with
                    Android in future releases.
                */}
                <TouchableOpacity  style={{marginTop: 30,width:'15%',paddingTop: 15,paddingBottom: 15,paddingHorizontal: 10,}} onPress={() => {onClose();}}>
                    <Image
                        source={require('../image/left-arrow.png')}
                        style={{height: 25, width: 25}}
                    />
                </TouchableOpacity>
            </View>
        );
    }
    render(){
        return(
            <ImageLayout
                renderPageHeader={this._renderPageHeader}
                images={this.state.items.map((value,index)=>{
                    return {
                        uri: "http://kes.co.id/dev/dreambook/assets/images/gallery/mm_"+ value.gallery_picture
                    }
                })}
                initialColToRender = {4}
                initialNumInColsToRender = {4}
            />
        )
    }
}
export default FullGambar