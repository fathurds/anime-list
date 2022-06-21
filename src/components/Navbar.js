import React from 'react';
import { Brand, Container, Header } from './NavbarStyle';

function NavbarComponent() {
    return (
        <Container>
            <Header>
                <Brand>
                    Anime<span>Kita</span>
                </Brand>
            </Header>
        </Container>
    )
}

export default NavbarComponent