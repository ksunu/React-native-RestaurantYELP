import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResultsHook from "../hooks/useResults-hook";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchBusinessApi, results, errorMessage] = useResultsHook();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price
    })
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={()=>setTerm()}
        onTermSubmit={()=>searchBusinessApi()}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
        <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
        <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen;