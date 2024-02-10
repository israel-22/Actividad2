import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent';

export const Inicio = () => {
const navigation = useNavigation();
  return (
    <View style={style.container}> 
      <Text style={style.hellow}>Bienvenido</Text>
      <Image style={style.imagen} source={require('../img/programa.jpg')} />

      <View style={style.button}>
          <ButtonComponent title='ACCEDER'onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Formulario' }))}
          />
        </View>
      </View>
    
  )
};

// export default Inicio;

const style=StyleSheet.create({
  hellow:{
  fontSize:17,
  fontWeight:'bold',
  color:'black'
  },
  txtDes:{
    fontSize:15,
  
  },
  imagen: {
    height: 200, 
    width: 250,
    left:5,
  },
  container: {
    padding: 10,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 80,
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    width: '70%',
  },
  
  })
