import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ results }) => {
  return (
    <View style={styles.containerStyle}>
      <Image source={{uri: results.image_url}} style={styles.imageStyle} />
      <Text style={styles.nameStyle}>{results.name}</Text>
      <Text>{results.rating} Stars, {results.review_count} Reviews</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 15
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  nameStyle: {
    fontWeight: 'bold'
  }
});

export default ResultsDetail;