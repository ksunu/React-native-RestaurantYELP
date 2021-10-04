import React, {useState} from 'react';
import { View, Text,TextInput, StyleSheet, Button } from 'react-native';

const BlogPostForm = ({navigation}) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View>
      
      <Text style={styles.labelStyle}>Edit Title:</Text>
      <TextInput style={styles.inputStyle} value={title} onChangeText={text => setTitle(text)} />

      <Text style={styles.labelStyle}>Edit Content</Text>
      <TextInput style={styles.inputStyle} value={content} onChangeText={text => setContent(text)} />
      
      <Button
        title="Save Blog Post"
        onPress={() => {

        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
 inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 15,
    padding: 5,
    margin: 5,
    borderRadius: 5
  },
  labelStyle: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,   
  }
})

export default BlogPostForm;