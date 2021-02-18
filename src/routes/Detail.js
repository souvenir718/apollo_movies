import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            title
            medium_cover_image
            description_full
            language
            rating
        }
    }
`;

const Container = styled.div`
    height: 100vh;
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
`;

const Column = styled.div`
    margin-left: 10px;
    width: 60%;
`;

const Title = styled.h1`
    font-size: 65px;
    margin-bottom: 15px;
`;

const Subtitle = styled.h4`
    font-size: 35px;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 28px;
`;

const Poster = styled.div`
    width: 25%;
    height: 60%;
    background-color: transparent;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: center center;
`;

export default ({}) => {
    const { id } = useParams();

    const {
        loading,
        data: { movie },
    } = useQuery(GET_MOVIE, {
        variables: { id: Number(id) },
    });

    console.log(movie);

    return (
        <Container>
            <Column>
                <Title>{movie.title}</Title>
                <Subtitle>
                    {movie.language} · {movie.rating}
                </Subtitle>
                <Description>{movie.description_full}</Description>
            </Column>
            <Poster bg={movie.medium_cover_image}></Poster>
        </Container>
    );
};
