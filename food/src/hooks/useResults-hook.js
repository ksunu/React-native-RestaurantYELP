import { useEffect, useState } from "react";
import businessApi from "../api/business.api";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  const searchBusinessApi = async (term) => {
    try {
      const response = await businessApi.getBusinessSearch(term);
      setResults(response)
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  };

  useEffect(() => {
    searchBusinessApi('pasta')
  }, [])

  return [searchBusinessApi, results, errorMessage];
};