import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import businessApi from "../api/business.api";
import api from "../api/api";

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchBusinessApi = async (term) => {
    const response = await businessApi.getBusinessSearch(term);
    setResults(response)

  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={()=>setTerm()}
        onTermSubmit={()=>searchBusinessApi()}
      />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen;