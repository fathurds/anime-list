import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;
    
    @media only screen and (min-width: 576px) {
        max-height: 540px;
    }
    @media only screen and (min-width: 768px) {
        max-height: 720px;
    }
    @media only screen and (min-width: 992px) {
        max-height: 960px;
    }
    @media only screen and (min-width: 1200px) {
        max-height: 1140px;
    }
    @media only screen and (min-width: 1400px) {
        max-height: 1320px;
    }
`

export const Header = styled.nav`
    display: flex;
    align-items: center;
    justify-content: between;
    flex-wrap: wrap;
    padding: 1.5rem;
    background-color: #565461;
    color: white;
`

export const Brand = styled.span`
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.75rem;
`