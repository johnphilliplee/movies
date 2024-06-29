import React from 'react';
import styled from 'styled-components';
import { Movie } from '../types/Movie';

interface MovieItemProps {
    movie: Movie;
    selectMovie: (movie: Movie) => void;
}

const Item = styled.li`
    padding: 10px;
    background: #f9f9f9;
    margin: 5px 0;
    cursor: pointer;

    &:hover {
        background: #e9e9e9;
    }
`;

const MovieItem: React.FC<MovieItemProps> = ({movie, selectMovie}) => {
    return (
        <Item onClick={() => selectMovie(movie)}>
            {movie.title}
        </Item>
    );
}

export default MovieItem;