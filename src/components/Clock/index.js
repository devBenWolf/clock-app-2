import {
    Main,
    MenuArticle,
    MenuDiv,
    QuoteArticle,
    InfoArticle,
    ButtonArticle,
    SalutationDiv,
    Button,
    ButtonSpan,
    MeridianSpan,
    P,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6
} from "./styles/clockStyles.js"

export default function Clock({children, ...props}) {
    return (
        <Main {...props}>{children}</Main>
    )
}

Clock.QuoteArticle = function ClockQuoteArticle({children, ...props}) {
    return (
        <QuoteArticle {...props}>{children}</QuoteArticle>
    )
}
Clock.InfoArticle = function ClockInfoArticle({children, ...props}) {
    return (
        <InfoArticle {...props}>{children}</InfoArticle>
    )
}
Clock.ButtonArticle = function ClockButtonArticle({children, ...props}) {
    return (
        <ButtonArticle {...props}>{children}</ButtonArticle>
    )
}
Clock.MenuArticle = function ClockMenuArticle({children, ...props}) {
    return (
        <MenuArticle {...props}>{children}</MenuArticle>
    )
}
Clock.MenuDiv = function ClockMenuDiv({children, ...props}) {
    return (
        <MenuDiv {...props}>{children}</MenuDiv>
    )
}
Clock.SalutationDiv = function ClockSalutationDiv({children, ...props}) {
    return (
        <SalutationDiv {...props}>{children}</SalutationDiv>
    )
}
Clock.Button = function ClockButton({children, ...props}) {
    return (
        <Button {...props}>{children}</Button>
    )
}
Clock.ButtonSpan = function ClockButtonSpan({children, ...props}) {
    return (
        <ButtonSpan {...props}>{children}</ButtonSpan>
    )
}
Clock.MeridianSpan = function ClockMeridianSpan({children, ...props}) {
    return (
        <MeridianSpan {...props}>{children}</MeridianSpan>
    )
}
Clock.P = function ClockP({children, ...props}) {
    return (
        <P {...props}>{children}</P>
    )
}
Clock.H1 = function ClockH1({children, ...props}) {
    return (
        <H1 {...props}>{children}</H1>
    )
}
Clock.H2 = function ClockH2({children, ...props}) {
    return (
        <H2 {...props}>{children}</H2>
    )
}
Clock.H3 = function ClockH3({children, ...props}) {
    return (
        <H3 {...props}>{children}</H3>
    )
}
Clock.H4 = function ClockH4({children, ...props}) {
    return (
        <H4 {...props}>{children}</H4>
    )
}
Clock.H5 = function ClockH5({children, ...props}) {
    return (
        <H5 {...props}>{children}</H5>
    )
}
Clock.H6 = function ClockH6({children, ...props}) {
    return (
        <H6 {...props}>{children}</H6>
    )
}