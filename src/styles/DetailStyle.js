import styled from "@emotion/styled";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

export const Container = styled.div(
    props => ({
        width: "100%",
        margin: "0 auto",
        padding: "0 20px",
        minWidth: "320px",
        maxWidth: "460px",
        [mq[0]]: {
            maxWidth: "540px"
        },
        [mq[1]]: {
            maxWidth: "720px"
        },
        [mq[2]]: {
            maxWidth: "960px"
        },
        [mq[3]]: {
            maxWidth: "1140px"
        },
        display: props.display
    })
)

export const HeaderDetail = styled.div(
    {
        position: "relative"
    }
)

export const Banner = styled.div(
    props => ({
        backgroundSize: "cover",
        backgroundImage: `url("${props.image}")`,
        height: "210px",
        backgroundPosition: "50% 35%",
        [mq[1]]: {
            height: "400px"
        }
    })
)

export const CoverWarp = styled.div(
    {
        position: "relative",
        marginTop: "-100px",
        [mq[1]]: {
            marginTop: "-150px"
        }
    }
)

export const CoverComponent = styled.div(
    {
        display: "grid",
        gridTemplateColumns: "150px auto",
        [mq[1]]: {
            gridTemplateColumns: "200px auto"
        },
        alignItems: "flex-end",
    }
)

export const Img = styled.img(
    {
        width: "100%"
    }
)

export const TitleWrap = styled.div(
    {
        width: "100%",
        textAlign: "center"
    }
)

export const DescriptionWrap = styled.div(
    {
        backgroundColor: "white",
        padding: "1px 15px",
        borderRadius: "15px"
    }
)