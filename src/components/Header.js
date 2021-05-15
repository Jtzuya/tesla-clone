import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);

    const cars = useSelector(selectCars)

    return (
        <Container>
            <a>
                <img src="./images/tesla-logo.svg" alt="" />
            </a>

            <Menu>
                { cars && cars.map(((car, index) => 
                    <a key={index} href="#">{car}</a>
                ))}
                {/* <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a> */}
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CustomCloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CustomCloseWrapper>
                { cars && cars.map(((car, index) => 
                    <li key={index}><a href="#">{car}</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Use Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cyber Truck</a></li>
                <li><a href="#">Roadster</a></li>
            </BurgerNav>


        </Container>
    )
}

const Container = styled.div`
    min-height: 45px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    a img{
        height: 20px;
        width: 100px;

        @media(max-width: 768px) {
            width: clamp(80px, 3vw, 100px);
        }
    }

    @media(max-width: 768px) {
        padding: 0 8px;
    }
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;

    a {
        font-weight: 700;
        text-transform: uppercase;
        padding: 0 10px;
    }

    @media(max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    
    a {
        font-weight: 700;
        font-size: clamp(12px, 3vw, 16px);
        text-transform: uppercase;
        padding: 0 10px;
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    list-style-type: none;
    padding: 20px;

    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.4s ease;

    li {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding: 15px 0;

        a {
            font-weight: 600;
        }
    }

`;

const CustomClose = styled(HighlightOffIcon)`
    cursor: pointer;
`;

const CustomCloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default Header
