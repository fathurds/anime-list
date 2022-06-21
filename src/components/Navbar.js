import React from 'react';
import { Brand, ContainerNavbar, Header, NavButton } from './NavbarStyle';
import { H4 } from '../styles/AllStyle'

function NavbarComponent() {
    return (
        <Header>
            <ContainerNavbar>
                <Brand>
                    Anime<span style={{ color: "#94B0F9" }}>Kita</span>
                </Brand>
                <NavButton>
                    <H4 pointer>Home</H4>
                    <H4 pointer>Collection</H4>
                </NavButton>
            </ContainerNavbar>
        </Header>
    )
}

export default NavbarComponent