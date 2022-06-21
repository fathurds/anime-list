import styled from "@emotion/styled";

export const Body = styled.div(
    {
        backgroundColor: "#EDF3FF",
        minHeight: "100vh",
    }
)

export const Container = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
    padding-right: 32px;

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
`

export const H4 = styled.h4(
    props => ({
        color: props.color,
        cursor: props.pointer && 'pointer'
    }),
)

export const H5 = styled.h5(
    props => ({
        color: "#606060",
        margin: 0,
        textAlign: props.align,
    })
)

export const H2 = styled.h2(
    {
        color: "#606060"
    }
)

export const H1 = styled.h1(
    {
        color: "#606060"
    }
)

export const Flex = styled.div(
    props => ({
        display: "flex",
        flexWrap: "wrap",
        justifyContent: props.justifyContent,
        marginLeft: "auto",
        marginRight: "auto"
    })
)