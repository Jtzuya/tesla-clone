import React from 'react'
import styled from "styled-components"

function Footer() {
    return (
        <Container>
            <p>Tesla © 2021</p>
            <a href="#">Privacy & Legal</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">Get Newsletter</a>
            <a href="#">News</a>
            <a href="#">Forums</a>
            <a href="#">Locations</a>
        </Container>
    )
}

const Container = styled.footer`
    display: flex;
    justify-content: center;
    padding-bottom: 45px;

    p, a {
        font-weight: 400;
        font-size: 14px;
        color: rgb(23, 26, 32);
        padding: 0px 5px;
    }
`;

export default Footer
