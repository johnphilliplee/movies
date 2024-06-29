import React from "react";
import styled from "styled-components";
import { Movie } from "../types/Movie";

interface MovieDetailProps {
    movie: Movie;
    onBack: () => void;
}

const DetailContainer = styled.div`
    padding: 20px;
`;

const Title = styled.h2`
    font-size: 1.5em;
`;

const Overview = styled.p`
    font-size: 1em;
`;

const ReleaseDate = styled.p`
    font-size: 0.9em;
    color: gray;
`;

const BackButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    cursor: pointer;
`;

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onBack }) => {
    return (
        <DetailContainer>
            <Title>{movie.title}</Title>
            <Overview>{movie.overview}</Overview>
            <ReleaseDate>{movie.release_date}</ReleaseDate>
            <BackButton onClick={onBack}>Back to list</BackButton>
        </DetailContainer>        
    );
}

export default MovieDetail;