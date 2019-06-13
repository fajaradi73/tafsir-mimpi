import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import AppStyles from '../styles/Android';

const ItemsList = (props) => {
    return(
        <View key={props.data.id} style={AppStyles.redeemItemCol}>
            <TouchableOpacity style={AppStyles.redeemItem} onPress={() => props.onClick(props.data)}>
                <Image resizeMode = "center" source={{uri: `${props.data.image}`}}  resizeMode="cover" style={AppStyles.redeemPic}></Image>
            </TouchableOpacity>
        </View>
    )
}

export default ItemsList;