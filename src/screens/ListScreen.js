import React from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';

const ListScreen = () => {

    const friends = [
        {
            name: 'Jordi'
        },
        {
            name: 'Joan'
        },
        {
            name: 'Laura'
        },
        {
            name: 'Nuri'
        }
    ]

  return (
      <View>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name }
            data={friends} 
            renderItem={(a) => {
                return <Text style={styles.textStyle}>{a.item.name}</Text>
            }}

        />
      </View>
  )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10,
        padding: 30,
    }
});

export default ListScreen;