import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/Blog-context";
import BlogPostForm from "../components/BlogPost-form";

const CreateScreen = ({ navigation }) => {

  const { addBlogPost } = useContext(Context)

  return (
    <BlogPostForm />
  )
}

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

export default CreateScreen;