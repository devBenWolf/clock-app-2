import styled from "styled-components"


export const Main = styled.main`
    position: relative;
    display: grid;
    height: 100vh;
    grid-template-areas:
        "quote"
        "alarm"
        "info"
        "button"
        "menu";
        place-items: start;

        > * {
            margin: 0 2rem 0 2rem;
        }

    @media (min-width: 65rem) {
        grid-template-columns: minmax(2rem, 1fr) repeat(2, minmax(2rem, 70rem)) minmax(2rem, 1fr);
        grid-template-areas:
            ". quote . ."
            ". alarm . ."
            ". info button ."
            "menu menu menu menu";
    }
`
export const Section = styled.section``
export const QuoteArticle = styled.article`
    grid-area: quote;
    align-self: start;
    padding: 2rem;
    border-radius: 25px;
    margin-top: 2rem;
`
export const InfoArticle = styled.article`
        grid-area: info;
        align-self: end;
        color: hsl(var(--clr-white));
`
export const MenuArticle = styled.article`
border: solid red;
    grid-area: menu;
    justify-self: center;
    width: 100%;
    display: grid;
    align-self: end;

    grid-template-areas:
        "zone"
        "country"
        "currency"
        "capital";

    > * {
        margin: 0 2rem 0 2rem;
    }

        @media (min-width: 35rem) {
            > * {
                margin: 0 5rem 0 5rem;
            }

            padding: 2rem 0 2rem 0;
            grid-template-areas:
            "zone country"
            "capital currency";
        }


`
export const MenuDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 35rem) {
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
    justify-self: start;

    @media(min-width: 65rem) {
        justify-self: end;
    }
`
export const Button = styled.button`
    display: flex;
    font-size: 1.4rem;
    color: hsl(var(--clr-dark) / 0.6);
    border-radius: 20%/50%;
    line-height: var(--lh-3);
    letter-spacing: var(--ls-4);
    font-weight: bold;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    padding:0.6rem 1rem 0.6rem 1rem;
    background-color: white;
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
    line-height: 100px;
    letter-spacing: -2.5px;
    filter: brightness(1.2);

    @media(min-width: 45rem) {
        line-height: 175px;
    }

    @media(min-width: 75rem) {
        line-height: 200px;
        letter-spacing: -4.38px;
    }
    
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
    letter-spacing: 3px;
    text-transform: uppercase;
    filter: brightness(1.2);

    @media(min-width: 45rem) {
        letter-spacing: 3.6px;
    }

    @media(min-width: 75rem) {
        letter-spacing: 4.8px;
    }
  
`
export const H4 = styled.h4`
    font-size: var(--fs-600);
    padding: 0 0 0 4rem;
    font-family: "Inter", sans-serif;
    line-height: 25px;
    letter-spacing: 3px;
    text-transform: uppercase;

    @media(min-width: 45rem) {
        line-height: 28px;
        letter-spacing: 3.6px;
    }

    @media(min-width: 75rem) {
        line-height: 28px;
        letter-spacing: 4px;
    }
`

export const H5 = styled.h5`
    font-size: var(--fs-500);
    font-family: "Inter", sans-serif;
    font-weight: ${(props) => props.fontWeight};
    line-height: 22px;
    margin: ${(props) => props.margin};
    color: ${(props) => props.color};

    @media(min-width: 75rem) {
        line-height: 28px;
    }
`

export const H6 = styled.h6`
    font-size: var(--fs-300);
    font-family: "Inter", sans-serif;
    font-weight: bold;
    line-height: 28px;
    letter-spacing: 2px;
    text-transform: uppercase;

    @media(min-width: 45rem) {
        letter-spacing: 2.6px;
    }

    @media(min-width: 75rem) {
        line-height: 28px;
        letter-spacing: 4.8px;
    }

`