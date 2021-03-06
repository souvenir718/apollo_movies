import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    height: 400px;
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: transparent;
`;

const Poster = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: center center;
    border-radius: 7px;
`;
const Button = styled.button``;
export default ({ id, bg, isLiked }) => {
    return (
        <Container>
            <Link to={`/${id}`}>
                <Poster bg={bg} />
            </Link>
            {/* <button>isLiked</button> */}
        </Container>
    );
};
