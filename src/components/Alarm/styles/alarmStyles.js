import styled from "styled-components"

export const AlarmMain = styled.div`
bottom: 70%;
grid-area: alarm;
`
export const InnerContainer = styled.div`
    display: grid;
    place-items: center;
    width: 30rem;
    height: 10rem;
`
export const ControlsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: hsl(217, 48%, 36%);
    padding: 1rem; 
    border-radius: 5px;
`
export const Input = styled.input`
width: 9rem;
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
    gap: 2rem;
`
export const Select = styled.select`
background-image: linear-gradient(to left top, hsl(314, 87%, 54%), hsl(274, 87%, 54%));
color: white;
border-radius: 5px;
border: none;
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
export const DisplayAlarmContainer = styled.div``
export const DisplayAlarmText = styled.h1`
    font-weight: bold;
    background-image: linear-gradient(to left top, hsl(314, 87%, 54%), hsl(274, 87%, 54%));

    // ****** this will put the gradient underneath the text ******
    background-clip: text;

    // ****** this will render the text transparent so we can see the clip underneath ******
    color: transparent;

`