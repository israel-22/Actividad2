import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const Formulario = () => {
    const navigation = useNavigation();
    const [numero1, setNumero1] = useState<string>('');
    const [numero2, setNumero2] = useState<string>('');
    const [resultado, setResultado] = useState<number | null>(null);
    const [resultadoMensaje, setResultadoMensaje] = useState<string>('');

    const Division = (numero1: number, numero2: number): number | string => {
        if (numero1 === 0 && numero2 === 0) {
            return "No es posible dividir cuando ambos números son cero.";
        } else if (numero2 === 0 || numero1 === 0) {
            return "No es posible dividir por cero.";
        } else {
            return numero1 / numero2;
        }
    };

    const handleCalcular = () => {
        if (numero1 !== '' && numero2 !== '') {
            const num1 = parseFloat(numero1);
            const num2 = parseFloat(numero2);

            if (!isNaN(num1) && !isNaN(num2)) {
                const division = Division(num1, num2);
                if (typeof division === 'string') {
                    setResultadoMensaje(division);
                    setResultado(null);
                } else {
                    setResultado(division);
                    setResultadoMensaje("");
                }
            } else {
                setResultadoMensaje("Por favor ingrese números válidos.");
                setResultado(null);
            }
        }
    };

    const limpiarCampos = () => {
        setNumero1('');
        setNumero2('');
        setResultado(null);
        setResultadoMensaje('');
    };

    return (
        <View style={styles.container}>
            <Text>Formulario</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setNumero1(text)}
                value={numero1}
                keyboardType="numeric"
                placeholder="Ingrese el primer número"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => setNumero2(text)}
                value={numero2}
                keyboardType="numeric"
                placeholder="Ingrese el segundo número"
            />

            <View style={styles.buttonContainer}>
                {resultado !== null && !isNaN(resultado) && (
                    <Text>El Resultado de la division es: {resultado}</Text>
                )}
                {resultado === null && (
                    <Text>El resultado es .</Text>
                )}
                {resultadoMensaje && (
                    <Text>{resultadoMensaje}</Text>
                )}
                <ButtonComponent title="Calcular los Numeros" onPress={handleCalcular} />
            </View>
            <View style={styles.buttonContainer}>
                <ButtonComponent title="Limpiar campos" onPress={limpiarCampos} />
            </View>
            <View style={styles.buttonContainer}>
                <ButtonComponent title='RETORNAR' onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Inicio' }))} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: 30,
        marginHorizontal: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
    },
    buttonContainer: {
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
    },
});
