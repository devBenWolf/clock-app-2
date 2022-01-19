import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {

        // ****** colors ******
        --clr-dark: 0 0% 0%;
        --clr-accent: 0 0% 19%;
        --clr-white: 0 0% 100%;

        // ****** font sizes ******
        --fs-900: 10rem;
        --fs-800:  clamp(2rem, 2vw, 4rem);
        --fs-700: 1.5rem;
        --fs-600: 1.5rem;
        --fs-500: 1.2rem;
        --fs-300: 1rem;
        --fs-button: 1.2rem;

        @media (min-width: 45rem) {
            --fs-900: 17.5rem;
            --fs-800: clamp(2rem, 4vw, 5.6rem);
            --fs-700: 1.8rem;
            --fs-600: 1.8rem;
            --fs-300: 1.3rem;
        }

        @media (min-width: 65rem) {
            --fs-900: 20rem;
            --fs-800: 5.6rem;
            --fs-700: 2.4rem;
            --fs-600: 2rem;
            --fs-500: 1.8rem;
            --fs-300: 1.5rem;
            --fs-body: 1.8rem;
            --fs-button: 1.6rem;
        }

        // ****** line height ******
        --lh-1: 20rem;
        --lh-2: 6.8rem;
        --lh-3: 2.8rem;

        // ****** letter spacing ******
        --ls-4: 5px;
        --ls-3: 4.8px;
        --ls-2: 4px;
        --ls-1: 3px;

        // ****** font families ******
        --ff-inter: "Inter", sans-serif;

        // ****** font weights ******
        --fw-normal: 400;
        --fw-bold: 700;
    }


    // *************** // 
    //      Resets     //
    // *************** //

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    picture,
    blockquite,
    figure {
        margin: 0;
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }



    html {
        font-size: 62.5%;
    }

    body {
        font-size: var(--fs-body);
        min-height: 100vh;
        font-family: var(--ff-inter);
        margin: 0;
        text-rendering: optimizeSpeed;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    select,
    input,
    button,
    textarea {
        font-inherit;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        font-weight: 400;
    }

    [data-sr-only] {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap; /* added line */
        border: 0;
    }

    [data-flow="1"] {
        >*:where(:not(:first-child)) {
            margin-top: 1rem;
        }
    }
    [data-flow="2"] {
        >*:where(:not(:first-child)) {
            margin-top: 2rem;
        }
    }
    [data-flow="3"] {
        >*:where(:not(:first-child)) {
            margin-top: 3rem;
        }
    }
    [data-flow="4"] {
        >*:where(:not(:first-child)) {
            margin-top: 4rem;
        }
    }

    @keyframes fade_in_show {
        0% {
             opacity: 0;
             transform: scale(0)
        }
   
        100% {
             opacity: 1;
             transform: scale(1)
        }
   }
`