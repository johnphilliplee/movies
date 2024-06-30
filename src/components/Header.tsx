// src/components/Header.tsx
import React from 'react';
import { HeaderContainer, Logo, Title, TextButton, IconButton } from './ui';
import tv from '../images/tv.png';
import menu from '../images/menu.png';

const Header = () => (
    <HeaderContainer>
      <div style={{ marginRight: '16px' }}> {/* Add margin here */}
        <Logo src={tv} alt="TV Logo" />
      </div>
      <Title>My App</Title>
      <div style={{ flexGrow: 1}}> </div>
      <TextButton>Sign In</TextButton>
      <div style={{ marginLeft: '16px' }}> {/* Add margin here */}
        <IconButton icon={menu} />
      </div>      
    </HeaderContainer>
  );
  
  export default Header;