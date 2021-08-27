import React from 'react'
import styled from 'styled-components';

const NavBar_Container = styled.header`
    position: sticky;
    top: 0;
    background-color: grey;
    height: 60px;
    color: white;
`;

const NavBar_Title = styled.h1`
    margin-top: 0;
    text-align: center;
`;

export const NavBar = () => {
    return (
        <NavBar_Container>
            <NavBar_Title>Welcome to big movie search engine</NavBar_Title>
        </NavBar_Container>
    )
}

export default NavBar;