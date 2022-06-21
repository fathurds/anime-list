import React from 'react';
import { Brand, Container, H4, Header, NavButton } from './NavbarStyle';

function NavbarComponent() {
    return (
        <Header>
            <Container>
                <Brand>
                    Anime<span style={{ color: "#94B0F9" }}>Kita</span>
                </Brand>
                <NavButton>
                    <H4 pointer>Home</H4>
                    <H4 pointer>Collection</H4>
                </NavButton>
            </Container>
        </Header>
    )
}

export default NavbarComponent