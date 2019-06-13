import {StyleSheet, Dimensions} from 'react-native';

let deviceWidth     = Dimensions.get('window').width;
let deviceHeight    = Dimensions.get('window').height;

//setting up
export let color = {
    base : '#00a8ff',
    secondary : "",
    backgroundLayer : "#eee",
    defaultFont : "#222",
    linkFont : "#E61A80",
} 

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    inputContainer: {
        flex: 7,
        backgroundColor: '#40bfe8'
    },
    containerList:{
        flex: 1,
    },

    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#fff'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#193441',
        justifyContent: 'center'
    },

    displayText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },

    inputButtonHighlighted: {
      backgroundColor: '#193441'
    },

    historyDisplayContainer: {
      flex: 1,
      backgroundColor: '#193441'
    },

    historyDisplayText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    toastContainer: {
        position: 'absolute', 
        height: 70,
        left:0, 
        top:0, 
        width: '100%', 
        zIndex: 1  
    },
    logoImage: {
        width: deviceWidth*0.3,
        height: deviceWidth*0.3,
    },
    signInTitle: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'Aristotelica-Bold',
        color: '#48B7E4',
    },
    signUpRole: {
        fontSize: 25,
        marginTop: 20,
        textAlign: 'center',
        color: '#48B7E4',
    },
    signUpTitle: {
        fontSize: 25,
        marginTop: 20,
        textAlign: 'center',
        color: '#48B7E4',
    },
    userInputContainer: {
        flex:1,
        marginTop: 10,
        width: deviceWidth*0.9,
        paddingTop: 15,
        paddingBottom: 0,
        alignItems: 'center',
    },
    imageView :{
        flex:1,
        width: deviceWidth,
        height : 250,
        alignItems: 'center',
    },
    imageBuku :{
        flex:1,
        width: deviceWidth,
        height : 200,
        alignItems: 'center',
    },
    buttonMenu : {
        flex    : 1,
        flexDirection : 'row',
        height  : 70,
        width   : deviceWidth*0.95,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth : 1, 
        borderRadius : 10,
        borderColor : 'black',
        backgroundColor: '#5EE1E1',
    },
    textMenu :{
        fontSize: 18,
        fontWeight:'bold',
        color: 'white'
    },
    textSub : {
        fontSize: 13,
        fontWeight:'bold',
        color: 'white'
    },
    viewText :{
        flex : 1,
        flexDirection : 'column',
    },
    viewIcon :{
        padding: 10,
        height : 70,
        width : 70,
    },
    viewArrow:{
        padding: 15,
        height : 50,
        width : 50
    },
    imageButton: {
        height : '100%',
        width : '100%',
    },
    userInputSignUpContainer: {
        marginTop: 0,
        width: deviceWidth*0.9,
        paddingTop: 0,
        paddingBottom: 0,
        alignItems: 'center',
    },
    inputLayout: {
        marginTop: 10,
        width: deviceWidth*0.9,
        backgroundColor:'#ffffff',
        height: 45,
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor : 'black'
    },
    inputSignUpLayout: {
        marginTop: 0,
        marginHorizontal: 36,
        width: deviceWidth*0.8,
    },
    userButton: {
        backgroundColor: '#00a8ff',
        width: deviceWidth*0.5,
        alignItems: 'center',
        alignSelf: 'center',
        color: 'white',
        borderRadius: 4,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    userViewsearch: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#bdc3c7',
        width : deviceWidth*0.95,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius : 10
    },
    userButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    signUp: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: deviceWidth*0.7,
        marginTop: 15,
        width: deviceWidth*0.8
    },
    userSignTypeText: {
        color: '#48B7E4',
        fontWeight: 'bold',
        fontSize: 16
    },
    userSignQuestionText: {
        fontSize: 16
    },
    userContainerButton: {
        backgroundColor: '#48B7E4',
        width: deviceWidth*0.8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        borderRadius: 4,
        marginTop: 20,
    },
    userContainerColumn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userContainerButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    genderTextContainer: {
        width: deviceWidth*0.9,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    genderImageContainer: {
        width: deviceWidth*0.9,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    genderText: {
        marginRight: 15,
        marginTop: 0,
        fontSize: 20,
        alignItems: 'flex-start',
        color: '#ffffff'
    },
    genderInput: {
        marginRight: 20,
        fontSize: 18,
    },
    genderRadioContainer: {
    },
    roleMainContainer: {
        width: deviceWidth,
        marginTop: 40,
    },
    roleContainer: {
        height: 90,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdde1',
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row',
        backgroundColor: '#f5f6fa'
    },
    rolePicContainer: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    roleContentContainer: {
        flex: 1,
        paddingLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    roleContentText: {
        fontFamily: 'Raleway-SemiBold',
        fontSize: 18
    },
    photoSectionDivider : {
        marginBottom : 24,
    },
    signupPhotoWrap : {
        justifyContent: "center",
        alignItems : "center",
        height : 200,
        width : deviceWidth * 0.8,
    },
    pictureHolder : {
        position : "relative",
        backgroundColor : "#222",
        height : 200,
        width : 200,
        borderRadius : 200,
    },
    pictureHolderImg : {
        position : "relative",
        backgroundColor : "#222",
        height : 200,
        width : 200,
        borderRadius : 200,
        overflow : "hidden"
    },
    pictureHolderCameraIcon : {
        position : "absolute",
        height : 60,
        width : 60,
        bottom : -10,
        right : 0,
        backgroundColor : "#48B7E4",
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 80,
    },
    containerDaftar : {

        backgroundColor:'#40bfe8',
        flexGrow: 1
    },
    containerToolbar:{
        backgroundColor:'#40bfe8',
        alignItems:'flex-start',
        flexDirection:"row"
    },
    containerView: {
        backgroundColor:'#FFFFFF',
        flexGrow: 1,
    },
    containerText: {
        backgroundColor:'#40bfe8',
        flexGrow: 2,
        alignItems: 'flex-start',
        margin:10
    },
    icon:{
        width:30,
        height:30,
        margin:10
    },
    inputbox : { 
        width: 350,
        backgroundColor:'#f0f0f0',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        color:'#ffffff',
        marginVertical: 10,
        marginEnd: 20,
        marginStart: 20,
        marginTop : 10,
        tintColor: '#ffffff'
    },
    signupTextCont : {
        flexGrow: 1,
        backgroundColor : "#40bfe8",
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'row'
    },

    signupText: {

        color:'rgba(255,255,255,0.6)',

        fontSize:16

    },
    button : {
        width:300,
        backgroundColor:'#40bfe8',
        borderRadius: 8,
        marginVertical: 20,
        paddingVertical: 13
    },
    loginText: {
        color: 'white',
        fontSize:20
    },
    buttonText :  {
        fontSize: 16,
        fontWeight: '500',
        color:'#ffffff',
        textAlign:'center'
    },
    signupButton: {

        color:'#ffffff',

        fontSize:16,

        fontWeight:'500'

    },
    textInput: {
        fontSize: 16,
        color : '#000000',
        height: 40,
        paddingBottom:10,

    },
    inputLayoutDaftar: {
        marginTop: 16,
        marginHorizontal: 36
    },
    text: {
        justifyContent:'center',
        fontSize: 16,
        color: '#fff',
        padding:10,
        alignItems: 'center',
  },
  angka: {
        fontSize: 16,
        color: '#fff',
        padding:10,
        textAlign: 'center'
  },
  containerListView: {
        flex: 1,
        flexDirection: 'row',
        width: deviceWidth*0.95,
        alignSelf: 'center',
        // padding:10,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#262222'
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        margin: 5,
        height: 40,
        width: 40,
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
    redeemItemCol : {
        width : '50%',
        paddingHorizontal : 5,
        paddingBottom : 10,
    },
    redeemItem : {
        height : 200,
        width : '100%',
        borderWidth : 1,
        borderColor : "rgba(0,0,0,0.1)",
        backgroundColor : "#fff",
        borderWidth : 0.7,
        borderColor : 'black'
    },
    redeemPic : {
        width: "100%",
        height: '100%',
        paddingBottom: "100%",
    },
    sectionBody : {
        paddingVertical : 15,
        paddingHorizontal : 15,
    },
    redeemItemRow : {
        flex : 1,
        flexDirection : "row",
        flexWrap : "wrap",
    },
});

export default Style;
