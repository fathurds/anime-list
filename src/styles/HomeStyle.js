import styled from "@emotion/styled";

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: between;
    flex-wrap: wrap;
    padding: 0.5rem;
`
export const Card = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #FCFDFF;
    width: 48%;
    overflow: hidden;
    cursor: pointer;

    @media only screen and (min-width: 576px) {
        width: 32%;
        height: 280px;
    }
    @media only screen and (min-width: 768px) {
        width: 24%;
        height: 300px;
    }
    @media only screen and (min-width: 992px) {
        width: 19%;
    }
    @media only screen and (min-width: 1200px) {
        
    }
`

export const ImgWrap = styled.div(
    {
        width: "100%",
        height: "75%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
)

export const Img = styled.img(
    {
        width: "100%",
        marginBottom: "10px"
    }
)

export const TextWrap = styled.div(
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px"
    }
)

export const Search = styled.div(
    {
        display: "flex",
        justifyContent: "center",
        gap: "1rem"
    }
)

export const SearchInput = styled.input(
    {
        width: "100%",
        borderRadius: "10px",
        padding: "5px 10px",
        borderWidth: "1px",
        borderColor: "#cbd5e1",
        "&:hover": {
            borderColor: "#749BFF"
        },
        "&:focus": {
            borderColor: "#749BFF",
            outlineColor: "#749BFF"
        }
    }
)

export const BtnSearch = styled.button(
    {
        backgroundColor: "#749BFF",
        color: "white",
        width: "150px",
        border: 0,
        padding: "8px 0px",
        borderRadius: "0.5rem",
        transitionProperty: "all",
        transitionDuration: "150ms",
        cursor: "pointer",
        '&:hover': {
            opacity: "0.8"
        },
    }
)