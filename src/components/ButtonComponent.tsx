import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { PRIMARY_COLOR } from '../commos/ConstantColor';


interface ButtonProps{
title: string;
onPress:()=>void;

}

export const ButtonComponent = ({title, onPress}:ButtonProps) => {
  return (
<TouchableOpacity style={styles.buttonContainer}
onPress={onPress}>
    
    <Text style={styles.buttonText}>{title}</Text>
</TouchableOpacity>
  )
}

const styles=StyleSheet.create({
buttonContainer:{

backgroundColor:PRIMARY_COLOR,
paddingVertical:10,
padding:10,
borderRadius:10

},
buttonText:{
textAlign:'center',
color:'white',
fontSize:14,
fontWeight:'bold'

}

})
