import styled from "styled-components"

export const AlarmMain = styled.div`
grid-area: alarm;
margin: 1rem 2rem 1rem 2rem;
`
export const InnerContainer = styled.div`
    display: grid;
    place-items: start;
`
export const ControlsContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: hsl(217, 48%, 36%);
    padding: 1rem; 
    border-radius: 5px;
    animation-name: fade_in_show;
animation-duration: 0.5s;
`
export const Input = styled.input`
text-align: center;
background-image: linear-gradient(to left top, hsl(314, 87%, 54%), hsl(274, 87%, 54%));
color: white;
border-radius: 5px;
border: none;
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
export const Select = styled.select`
background-image: linear-gradient(to left top, hsl(314, 87%, 54%), hsl(274, 87%, 54%));
color: white;
border-radius: 5px;
border: none;
text-align: center;
`
export const Option = styled.option``
export const Button = styled.button`
    background-image: linear-gradient(to left top, hsl(314, 87%, 54%), hsl(274, 87%, 54%));
    color: white;
    border: none;
    border-radius: 5px;
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