import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ImageDetail = ({title, source}) => {

    return (
        <View>
            <Text>{title}</Text>
            <Image
                source={source}
            />
        </View>

    );
};

const styles = StyleSheet.create({});

export default ImageDetail;
