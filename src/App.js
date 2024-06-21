import React from "react";
import { useEffect } from "react";
import SearchIcon from "./search.svg";
import "./App.css"

const API_URL = "http://www.omdbapi.com?apikey=fa2ff204";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Toy Story");
  }, []);

  return <div className="app">
    <h1>MovieLand</h1>
  </div>;
};

export default App;

// fa2ff204
