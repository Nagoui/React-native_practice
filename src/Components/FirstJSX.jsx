import {View,Text} from 'react-native';
import React from 'react';

const FirstJSX =()=>{
    let name = "Ritesh"

    return(
        <View>
            <Text style={{fontSize:30,color:'#fff'}}>JSX</Text>
            <Text style={{fontSize:30,color:'#fff'}}>{name}</Text>
        </View>
    )
}

export default FirstJSX