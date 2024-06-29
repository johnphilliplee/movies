import React from 'react';
import MovieItem from './MovieItem';
import styled from 'styled-components';
import { Movie } from '../types/Movie';

interface MovieListProps {
    movies: Movie[];
    selectMovie: (movie: Movie) => void;
}

const List = styled.ul`
    list-style-type: none;
    padding: 0;    
`;

const MovieList: React.FC<MovieListProps> = ({ movies, selectMovie }) => {
    return (
        <List>
            {movies.map((movie) => (
                <MovieItem 
                    key={movie.id} 
                    movie={movie}
                    selectMovie={selectMovie}
                />
            ))}
        </List>
    );
}

export default MovieList;