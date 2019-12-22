import * as React from 'react';
import { Text, StyleSheet } from 'react-native';




const ComponentScreen = () => {
    return <Text style={styles.textStyle}>Uep!</Text>;
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
    }
})

export default ComponentScreen;
