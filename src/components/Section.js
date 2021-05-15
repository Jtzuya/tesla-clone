import React from 'react'
import styled from "styled-components"
import LightSpeed from "react-reveal/LightSpeed"
import Fade from "react-reveal/Fade"
import Jump from 'react-reveal/Jump';

function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImg}>

            <Fade bottom> 
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>

            <Buttons>
                <ButtonGroup>
                    <LightSpeed left>
                        <LeftButton>{props.leftBtnText}</LeftButton>
                    </LightSpeed>
                    { props.rightBtnText &&
                        <LightSpeed right>
                            <RightButton>{props.rightBtnText}</RightButton>
                        </LightSpeed>
                    }
                </ButtonGroup>
                
                <Jump>
                    <DownArrow src="./images/down-arrow.svg" />
                </Jump>
            </Buttons>

        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    /* background-image: url('../images/model-s.jpg'); from this to... */
    background-image: ${ props => `url("./images/${props.bgImage}")` };
    background-size: cover; /* very important */
    background-position: center;
    background-repeat: no-repeat;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    

    h1 {
        font-size: clamp(25px, 6vw, 35px);
        font-weight: 700;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.3rem;
    margin-bottom: 10px;

    @media(max-width: 768px) {
        display: flex;
        flex-flow: column;
        gap: 1rem;
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    opacity: 0.85;

    padding-bottom: 0.2px;

    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.453px;
    cursor: pointer;
`;

const RightButton = styled(LeftButton)`
    font-weight: 500;
    background-color: #DEDADA;
    opacity: 0.90;
    color: rgb(32, 32, 32);
`;

const DownArrow = styled.img`
    height: 40px;
    animation: animateDownArrow infinite 1.5s;
    margin-bottom: 20px;
`;

const Buttons = styled.div`
    text-align: center;
`;
export default Section
