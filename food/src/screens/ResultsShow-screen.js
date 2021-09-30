import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import businessApi from '../api/business.api';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  
  const getResult = async () => {
    const id = navigation.getParam('id');
    const response = await businessApi.getBusinessById(`${id}`);
    setResult(response)
  };

  useEffect(() => {
    getResult()
  }, [])

  if (!result) {
    return null
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyles} source={{ uri: item }} />
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  imageStyles: {
    height: 200,
    width: '100%'
  }
});

export default ResultsShowScreen;