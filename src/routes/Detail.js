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
        }
    }
`;

export default ({}) => {
    const { id } = useParams();

    const { loading, data } = useQuery(GET_MOVIE, {
        variables: { id: Number(id) },
    });

    return <div>{loading}</div>;
};
