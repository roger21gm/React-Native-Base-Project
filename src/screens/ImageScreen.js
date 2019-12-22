import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = (props) => {

    return (
        <View>
            <Text>Image Screen</Text>
            <ImageDetail
                title='Forest'
                source={require('../../assets/forest.jpg')}
            />
            <ImageDetail
                title='Beach'
                source={require('../../assets/beach.jpg')}
            />
            <ImageDetail
                title='Mountain'
                source={require('../../assets/mountain.jpg')}
            />
        </View>

    );
};

const styles = StyleSheet.create({});

export default ImageScreen;
