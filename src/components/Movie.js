import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Poster = styled.div`
    background-image: url(${(props) => props.bg});
`;
export default ({ id, medium_cover_image }) => {
    return (
        <div>
            <Link to={`/${id}`}>{id}</Link>
        </div>
    );
};
