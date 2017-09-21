import React, { Component } from 'react';
import { render } from 'react-dom';
import MoviesList from './MoviesList';

class App extends Component{
  constructor(){
    super();
    this.state = {
      movies: ['Die Hard', 'Die Hard 2', "Die Hard 3"]
    };
  }
render() {
  return (
    <MoviesList movies = {this.state.movies} />
  );
};
}
export default App;