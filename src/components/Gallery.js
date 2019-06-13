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

import Style,{color}from '../styles/Android.js'
import ItemsList from "../components/ItemList";

class Gallery extends Component {

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const type      = navigation.getParam('type', '');
        const typename  = navigation.getParam('typename', '');
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
            this.props.navigation.push("FullGambar",{id : Data.id,type : this.state.type})
    }

    handleGetItem = async () => {
        fetch('http://34.87.108.11/bukumimpi/api/dreams/dream_image?dream_type='+this.state.type,{method:"GET"})
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
                items     : [],
                userPic       : null
              })
            }
        });
    }
    componentDidMount(){
        this.handleGetItem();
    }

    render(){        
        return(
            <ScrollView style = {{flex: 1}}>
                <View style={Style.sectionBody}>
                    <View style={Style.redeemItemRow}>
                        {
                            this.state.items.length > 0 ?
                            this.state.items.map((value, index) => {
                                return (
                                    <ItemsList key={index} data={value} onClick={(data)=> {this.setDetailMenu(data)}}/>
                                );
                            })
                            :
                            <View style={{justifyContent : "center", paddingHorizontal : 100, height: '100%', width : '100%'}}>
                                <ActivityIndicator size = "large"  color={color.base} />
                            </View>
                        }
                    </View>
                </View>
            </ScrollView>
        )
    }
}
export default Gallery