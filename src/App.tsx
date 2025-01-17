import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { Movie } from './types/Movie';
import Header from './components/Header';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2em;
`;

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie,setSelectedMovie] = useState<Movie | null>(null);

  const deselectMovie = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then(response => {
      setMovies(response.data.results);
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    });
  }, []);

  const selectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      {
        selectedMovie ? (
          <MovieDetail movie={selectedMovie} onBack={deselectMovie} />
        ) : (
          <MovieList movies={movies} selectMovie={selectMovie} />
        )
      }
    </AppContainer>
  );
}

export default App;
