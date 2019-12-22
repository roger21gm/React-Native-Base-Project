import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const HomeScreen = (props) => {

    const { navigation } = props;

    return (
        <View>
            <Text style={styles.text}>Uep, estrep!</Text>
            <Button
                title="Go to Components Screen"
                onPress={() => navigation.navigate('Components')}
            />
            <Button
                title="Go to List Screen"
                onPress={() => navigation.navigate('List')}
            />
            <Button
                title="Go to Image Screen"
                onPress={() => navigation.navigate('Image')}
            />
            <Button
                title="Go to Counter Screen"
                onPress={() => navigation.navigate('Counter')}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;