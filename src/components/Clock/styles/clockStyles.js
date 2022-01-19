import styled from "styled-components"


export const Main = styled.main`
    display: grid;
    grid-template-areas:
        "quote"
        "."
        "info"
        "button"
        "menu";
        place-items: start;

        > * {
            margin: 5rem;
        }

    @media (min-width: 45rem) {
        grid-template-columns: minmax(2rem, 1fr) repeat(2, minmax(2rem, 70rem)) minmax(2rem, 1fr);
        grid-template-areas:
            ". quote . ."
            ". . . ."
            ". info button ."
            "menu menu menu menu";
    }
`
export const Section = styled.section``
export const QuoteArticle = styled.article`
    grid-area: quote;
    align-self: start;
    padding: 2rem;
    border-radius: 10%/50%;
`
export const InfoArticle = styled.article`
        grid-area: info;
        align-self: end;
        color: hsl(var(--clr-white));
`
export const MenuArticle = styled.article`
    grid-area: menu;
    justify-self: center;
    width: 100%;
    display: grid;
    align-self: end;
    margin: 0;
    padding: 4rem 0 4rem 0;
    grid-template-areas:
        "zone"
        "country"
        "currency"
        "capital";

    > * {
        margin: 0 5rem 0 5rem;
    }

        @media (min-width: 45rem) {
           grid-template-areas:
            "zone country"
            "capital currency";
        }


`
export const MenuDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 45rem) {
        flex-direction: column;
        align-items: start;
        padding: 2rem 0 2rem 0;
    }
`
export const SalutationDiv = styled.div`
    display: flex;
    align-items: center;  
`
export const ButtonArticle = styled.article`
    grid-area: button;
    align-self: end;
    justify-self: end;
`
export const Button = styled.button`
    display: flex;
    font-size: 1.6rem;
    color: hsl(var(--clr-dark) / 0.6);
    border-radius: 20%/50%;
    line-height: var(--lh-3);
    letter-spacing: var(--ls-4);
    font-weight: bold;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`
export const ButtonSpan = styled.span`
    display: grid;
    place-items: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: hsl(var(--clr-accent));
    margin: 0 0 0 1rem;
    
`
export const MeridianSpan = styled.span`
    font-size: var(--fs-800);
`


export const P = styled.p`
        margin: ${(props) => props.margin};
        font-size: ${(props) => props.fontSize};
        font-weight: ${(props) => props.fontWeight};
`
export const H1 = styled.h1`
    font-size: var(--fs-900);
    font-family: "Inter", sans-serif;
    font-weight: bold;
    line-height: 200px;
    letter-spacing: 5px;
    
`
export const H2 = styled.h2`
    font-size: var(--fs-800);
    font-family: "Inter", sans-serif;
    font-weight: bold;
    line-height: 68px;
`
export const H3 = styled.h3`
    font-size: var(--fs-700);
    font-family: "Inter", sans-serif;
    font-weight: bold;
    line-height: 28px;
    letter-spacing: 4.8px;
    text-transform: uppercase;
`
export const H4 = styled.h4`
    font-size: var(--fs-600);
    padding: 0 0 0 4rem;
    font-family: "Inter", sans-serif;
    line-height: 28px;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0 0 1rem 0;

    @media (max-width: 35rem) {
        padding: 2rem;
    }
`

export const H5 = styled.h5`
    font-size: var(--fs-500);
    font-family: "Inter", sans-serif;
    font-weight: bold;
    line-height: 28px;
`

export const H6 = styled.h6`
font-size: var(--fs-300);
font-family: "Inter", sans-serif;
font-weight: bold;
line-height: 28px;
letter-spacing: 4.8px;
text-transform: uppercase;
`