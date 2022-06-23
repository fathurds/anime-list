import styled from "@emotion/styled";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

export const Container = styled.div(
    props => ({
        width: "95%",
        margin: "0 auto",
        padding: "10px",
        minWidth: "320px",
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
        marginTop: "-65px",
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
            gridTemplateColumns: "200px auto",
            alignItems: "center",
            marginTop: "35px"
        },
        alignItems: "flex-end",
    }
)

export const Img = styled.img(
    props => ({
        width: props.width,
    })
)

export const TitleWrap = styled.div(
    {
        width: "100%",
        textAlign: "center",
    }
)

export const DescriptionWrap = styled.div(
    {
        backgroundColor: "white",
        opacity: "0.8",
        padding: "1px 15px",
        borderRadius: "15px",
        [mq[1]]: {
            marginTop: "-140px"
        }
    }
)

export const Button = styled.button(
    props => ({
        display: props.mobile ? "inline" : "none",
        backgroundColor: "#749BFF",
        color: "white",
        width: "95%",
        border: 0,
        padding: "8px 40px",
        borderRadius: "0.5rem",
        transitionProperty: "all",
        transitionDuration: "150ms",
        marginLeft: props.mobile && "10px",
        cursor: "pointer",
        '&:hover': {
            opacity: "0.8"
        },
        [mq[1]]: {
            display: props.mobile ? "none" : "inline",
            width: "100%"
        },
    })
)

export const ContentWrap = styled.div(
    {
        [mq[1]]: {
            display: "grid",
            gridTemplateColumns: "200px auto",
            gap: "1rem"
        }
    }
)

export const InformationWrap = styled.div(
    props => ({
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        marginTop: props.mobile ? "0" : "-100px",
        padding: props.mobile ? "10px" : "100px 5px 10px 5px",
        borderRadius: "15px",
        display: props.mobile ? "block" : "none",
        [mq[1]]: {
            display: props.mobile ? "none" : "block",
        }
    })
)

export const H4 = styled.h4(
    props => ({
        margin: "0",
        color: "#606060",
        fontWeight: props.desc && 'normal',
    })
)

export const FlexInfor = styled.div(
    props => ({
        display: "flex",
        justifyContent: props.mobile ? "space-around" : "space-between"
    })
)

export const H3 = styled.h3(
    props => ({
        color: "#606060",
        [mq[1]]: {
            display: props.desc ? "none" : "block"
        }
    })
)

export const CharWrap = styled.div(
    {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "0.5rem",
        width: "100%",
        marginBottom: "32px"
    }
)

export const CharCard = styled.div(
    {
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        display: "inline-grid",
        borderRadius: "5px",
        height: "100px",
        width: "100%",
        overflow: "hidden",
        gridTemplateColumns: "50% 50%",
        gridTemplateAreas: "character staff",
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        [mq[2]]: {
            width: "49%"
        }
    }
)

export const CharCover = styled.div(
    props => ({
        display: 'flex',
        width: "100%",
        height: "100px",
        justifyContent: props.end ? "flex-end" : "flex-start",
        gap: "0.5rem",
    })
)

// MODALS

export const BgModal = styled.div(
    props => ({
        backgroundColor: "rgb(0, 0, 0, 0.5)",
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        justifyContent: "center",
        alignItems: "center",
        height: "115vh",
        display: props.display
    })
)

export const Modal = styled.div(
    {
        backgroundColor: "white",
        maxWidth: "22rem",
        padding: "8px 12px",
        borderRadius: "8px",
        color: "#606060",
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        width: "100%",
        [mq[1]]: {
            maxWidth: "28rem"
        }
    }
)

export const ModalHeader = styled.div(
    {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "12px",

    }
)

export const Svg = styled.svg(
    {
        height: "24px",
        width: "24px",
        cursor: "pointer",
        padding: "4px",
        borderRadius: "9999px",
        opacity: "0.5"
    }
)

export const BtnDropdown = styled.p(
    props => ({
        width: "99%",
        cursor: "pointer",
        borderColor: "slategray",
        boxShadow: "none",
        borderStyle: "solid",
        borderWidth: "1px",
        padding: "1px 5px",
        marginBottom: "0px",
        marginTop: "0px",
        backgroundColor: props.disabled && '#B6B6B6'
    })
)

export const ListDropdown = styled.ul(
    props => ({
        display: props.display,
        position: "absolute",
        padding: "0",
        margin: '0',
        backgroundColor: "white",
        borderColor: "slategray",
        borderStyle: "solid",
        borderWidth: "1px",
        width: "250px",
    })
)

export const ListStyle = styled.li(
    {
        listStyleType: "none",
        cursor: "pointer",
        padding: "0 5px",
        '&:hover': {
            backgroundColor: "#749BFF",
            color: "white"
        }
    }
)