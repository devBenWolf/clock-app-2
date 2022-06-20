import styled from "styled-components"

export const AlarmMain = styled.div`
grid-area: alarm;
margin: 1rem 2rem 1rem 2rem;
`
export const InnerContainer = styled.div`
    display: grid;
    place-items: start;
    
    @media (min-width: 45rem) {
        display: flex;
        height: 8rem;
    }
`

export const ControlsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 1rem; 
    border-radius: 5px;
    animation-name: fade_in_show;
    animation-duration: 0.5s;
    margin-top: 1rem;

    @media (min-width: 45rem) {
        margin-left: 5rem;
        margin-top: 0;
    }
`
export const Input = styled.input`
text-align: center;
background-color: hsl(var(--clr-dark) / 0.8);
width: 10rem;
color: white;
border-radius: 5px;
border: none;
height: 3rem;
padding: 0 1rem 0 1rem;
::placeholder {
    opacity: 1;
}
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const Option = styled.option``
export const Button = styled.button`
    background-color: hsl(var(--clr-dark) / 0.8);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
export const ButtonContainer = styled.div`
background-color: transparent;
display: flex;
gap: 2rem;
border: none;
margin-top: 1rem;
`
export const DisplayAlarmContainer = styled.div`
margin-top: 1rem;
display: flex;
align-items: center;
justify-content: center;
`
export const DisplayAlarmText = styled.h1`
    font-weight: bold;
    color: white;
    font-size: var(--fs-300);
    letter-spacing: var(--ls-1);
    text-transform: uppercase;
`

export const DisplayAlarmSpan = styled.span`
margin-left: 0.5rem;
font-size: var(--fs-700);
color: white;
font-weight: bold;
`