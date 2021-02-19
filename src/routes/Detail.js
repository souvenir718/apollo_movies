import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
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
        suggestions(id: $id) {
            id
            medium_cover_image
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
    width: 50%;
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

const Suggestions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
    width: 60%;
    height: 20vh;
    bottom: 1%;
    margin-left: 6%;
`;

const SuggestionContainer = styled.div`
    height: 20vh;
    width: 13%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    overflow: hidden;
    border-radius: 7px;
`;

const SuggestionPoster = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: center center;
`;

export default ({}) => {
    const { id } = useParams();

    const { loading, data } = useQuery(GET_MOVIE, {
        variables: { id: Number(id) },
    });

    return (
        <>
            <Container>
                <Column>
                    <Title>{loading ? 'Loading...' : data.movie.title}</Title>
                    <Subtitle>
                        {data?.movie?.language} {data?.movie?.rating}
                    </Subtitle>
                    <Description>{data?.movie?.description_full}</Description>
                </Column>
                <Poster bg={data?.movie?.medium_cover_image}></Poster>
            </Container>
            <Suggestions>
                {data?.suggestions?.map((s) => (
                    <SuggestionContainer key={s.id}>
                        <Link to={`/${s.id}`}>
                            <SuggestionPoster bg={s.medium_cover_image} />
                        </Link>
                    </SuggestionContainer>
                ))}
            </Suggestions>
        </>
    );
};
