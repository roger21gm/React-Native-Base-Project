import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const   CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Button onPress={() => setCounter(counter+1)} title='INCREASE'/>
            <Button onPress={() => setCounter(counter-1)} title='DECREASE'/>
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
