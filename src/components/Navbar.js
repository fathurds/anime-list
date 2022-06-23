import React from 'react';
import { Brand, ContainerNavbar, Header, NavButton } from './NavbarStyle';
import { H4 } from '../styles/AllStyle'
import { useNavigate } from 'react-router-dom';

function NavbarComponent() {
    const navigate = useNavigate();

    return (
        <Header>
            <ContainerNavbar>
                <Brand onClick={() => navigate('/')}>
                    Anime<span style={{ color: "#94B0F9" }}>Kita</span>
                </Brand>
                <NavButton>
                    <H4 pointer onClick={() => navigate('/')}>Home</H4>
                    <H4 pointer onClick={() => navigate('/')}>Collection</H4>
                </NavButton>
            </ContainerNavbar>
        </Header>
    )
}

export default NavbarComponent