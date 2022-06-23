import styled from "@emotion/styled"

export const Button = styled.button(
    props => ({
        backgroundColor: props.danger? '#ef4444' : "#749BFF",
        color: "white",
        width: props.danger? "100%" : "150px",
        border: 0,
        padding: "10px",
        borderRadius: "0.5rem",
        transitionProperty: "all",
        transitionDuration: "150ms",
        cursor: "pointer",
        '&:hover': {
            opacity: "0.8"
        },
    })
)

export const TitleWrap = styled.div(
    {
        display: "flex",
        justifyContent: "space-between",
        margin: "10px"
    }
)

export const ButtonWrap = styled.div(
    {
        display: "flex",
        justifyContent: "space-evenly"
    }
)