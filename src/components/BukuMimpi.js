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
    AppRegistry
    
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import Style from '../styles/Android.js'
import SplashScreen from 'react-native-splash-screen';
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
import Toast from "../components/Toast";

var radio_props = [
  {label: 'ALL', value: 0 },
  {label: '4D', value: 4 },
  {label: '3D', value: 3 },
  {label: '2D', value: 2 }
];

class BukuMimpi extends Component {

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      userType  :0,
      userSearch: "",
      userPic : null,
      dataTogel: [],
      status:0,
      list:null,
      code:"",
      sourceStatus:false,
      secureTextEntry: true,
      toastMessage: "Congratulation! kindly check your email to activate it",
      toastText: "white",
      toastType: "success"
    }
    this.userSearchRef = this.updateRef.bind(this, 'userSearch');
  }

    updateRef = (name, ref) => {
      this[name] = ref;
    }
  
    componentDidMount() {
        SplashScreen.hide();
    }

    renderItem = ({item}) => {
      return(
            <View style={Style.containerListView}>
              <View style={Style.container_text}>
                  <Text style={Style.angka}>
                      {`${item.dream_number}`}
                  </Text>
                  <View style={Style.separator}>
                  </View>
                <Text style={Style.text}>
                      {`${item.dream_description}`}
                  </Text>
              </View>
            </View>
        )
    }

    onSubmit = () => {
      if (this.state.userSearch == "") {
        // console.warn('error');  
      }else{
        fetch('http://192.168.100.16/bukumimpi/api/dreams/dream_search?dream_name='+this.state.userSearch+'&dream_type='+this.state.userType,{method:"GET"})
          .then((response) => response.json())
          .then((responseJson)=>{
            if(responseJson.status == 1 && responseJson.code == "DR_SCS_0001"){
              this.setState({
                sourceStatus : true, 
                status  : responseJson.status,
                code    : responseJson.code,
                dataTogel : responseJson.data,
                userPic : responseJson.data[0].dream_image
              })
            }
            else{
              this.setState({
                sourceStatus : true, 
                status  : responseJson.status,
                code    : responseJson.code,
                dataTogel : [],
                userPic : null
              })
            }
        });
      }
    }
    
    onSearch = (text) => {
      this.setState({ userSearch:text})
    }

    static navigationOptions = {
      title: 'Buku Mimpi',
      headerStyle: {
        backgroundColor: '#FEEC4C',
      },
      headerTintColor: '#7F5626',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
    renderSeparator = () =>{
        return(
          <View style={{height: 10, width: '100%'}}></View>
        )
      }
  
    renderResponse(){
      if(this.state.sourceStatus == true){
          if(this.state.status == 1 && this.state.code == "DR_SCS_0001"){
            return(
              <FlatList
                    style={{marginTop: 20}}
                    data={this.state.dataTogel}
                    renderItem={this.renderItem}
                    keyExtractor = {item => item.dream_id.toString()}
                    ItemSeparatorComponent = {this.renderSeparator}
                />
            )
          }else{
            return(
              <View style={{flex: 1}}>
                <Text style={{textAlign: 'center',color: '#FFFFFF',marginTop: 50,fontSize:20}}>
                  Data tidak ditemukan
                </Text>
              </View>
            )
          }
      }else{
        null;
      }
    }

  render() {
    let { errors = {}, secureTextEntry, ...data } = this.state;
    return (
        <View style={Style.rootContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Style.userInputContainer}>
              <View style={{height: 160,width: '100%',flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                {this.state.userPic === null ? (
                <Image resizeMode='contain' style={{width: '100%'}} source={require('../image/bg_samping.png')} />
                ) : (
                  <Image resizeMode='cover' style={{height:160,width: 500}}  source={{uri : this.state.userPic}}/>
                )}
              </View>
              <View style={Style.genderImageContainer}>
                <ImageBackground resizeMode='contain' source={require('../image/tepi.png')} style={{width: '100%'}}>
                <View style={Style.genderTextContainer}>
                  <Text style={Style.genderText}>
                    Pilih
                  </Text>
                  <View style={Style.genderRadioContainer}>
                    <RadioForm 
                      radio_props={radio_props}
                      initial={0}
                      formHorizontal={true}
                      labelHorizontal={true}
                      labelStyle={{ marginRight: 10 }}
                      buttonColor={'#FEEC4C'}
                      buttonSize={15}
                      labelColor={'#ffffff'}
                      animation={true}
                      onPress={(userType) => this.setState({userType:userType})}
                    />
                  </View>
                </View>
                </ImageBackground>
              </View>
              <View style={Style.inputLayout}>
                <TextInput
                  ref={this.userSearchRef}
                  keyboardType='email-address'
                  placeholder='Search'
                  labelFontSize={14}
                  labelPadding={8}
                  style={{fontSize: 16}}
                  value={data.userSearch}
                  onSubmitEditing={this.onSubmitSearch}
                  enablesReturnKeyAutomatically={true} //berlaku saat ada input
                  returnKeyType='next' //saat enter ke next input
                  onChangeText={this.onSearch}
                />
              </View>
              <TouchableOpacity 
                  style={Style.userButton} 
                  onPress={this.onSubmit}>
                    <Text style={Style.userButtonText}>Cari</Text>
              </TouchableOpacity>
            </View>
            <View style={Style.containerList}>
              {this.renderResponse()}
            </View>
          </ScrollView>
        </View>
    );
  }
}
export default BukuMimpi