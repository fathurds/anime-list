import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
    justify-content: space-between;
    
    @media only screen and (min-width: 576px) {
        max-width: 540px;
    }
    @media only screen and (min-width: 768px) {
        max-width: 720px;
    }
    @media only screen and (min-width: 992px) {
        max-width: 960px;
    }
    @media only screen and (min-width: 1200px) {
        max-width: 1140px
    }
    @media only screen and (min-width: 1400px) {
        max-width: 1320px
    }
`

export const Header = styled.nav`
    display: flex;
    align-items: center;
    justify-content: between;
    flex-wrap: wrap;
    padding: 0.5rem;
    background-color: #565461;
    color: white;
`

export const Brand = styled.span`
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
`

export const NavButton = styled.div`
    display: flex;
    gap: 1rem;
`

export const H4 = styled.h4(
    props => ({
        color: props.color,
        cursor: props.pointer && 'pointer'
    }),
)