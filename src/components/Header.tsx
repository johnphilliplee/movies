import React from "react";
import styled from "styled-components";
import tv from "../images/tv.png";
import menu from "../images/menu.png";

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #282c34;
    color: white;
`;

const Logo = styled.img`
    width: 50px;
    height: 50px;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 24px;
`;

const SignInLabel = styled.span`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const IconBtn = styled.button`
    width: 36px;
    height: 36px;
    background: url(${menu}) no-repeat center;
    background-size: cover;
    border: none;
    cursor: pointer;
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Logo src={tv} alt="Logo" />
            <Title>Movies App</Title>
            <SignInLabel onClick={() => console.log('Sign In Clicked')}>Sign In</SignInLabel>            
            <IconBtn onClick={() => console.log('Icon Clicked')} />
        </HeaderContainer>
    );
};

export default Header;