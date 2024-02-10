import { createStackNavigator } from '@react-navigation/stack';
import { Inicio } from '../screen/Inicio';
import { Formulario } from '../screen/Formulario';
import { StyleSheet } from 'react-native';


export type RootStackParamList={
Inicio: undefined,
Formulario: undefined,


}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation=()=> {
  return (
    <Stack.Navigator 
    screenOptions={{
headerStyle:{
 elevation:0
},
cardStyle:{
  backgroundColor:'blue'
}

    }}>
      <Stack.Screen name="Inicio" options={{title:'Screen 1'}} component={Inicio}/>
      <Stack.Screen name="Formulario" options={{title:'Screen 2'}} component={Formulario}/>

    </Stack.Navigator>
  );
}




