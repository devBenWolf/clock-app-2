import {
    AlarmMain,
    InnerContainer,
    ControlsContainer,
    Input,
    InputContainer,
    Select,
    Option,
    Button,
    ButtonContainer,
    DisplayAlarmContainer,
} from "./styles/alarmStyles"


const Alarm = ({children, ...props}) => {
    return ( <AlarmMain {...props}>{children}</AlarmMain> );
}

Alarm.InnerContainer = function AlarmInnerContainer({children, ...props}) {
    return (<InnerContainer {...props}>{children}</InnerContainer>
    )
}
Alarm.ControlsContainer = function AlarmControlsContainer({children, ...props}) {
    return (<ControlsContainer {...props}>{children}</ControlsContainer>
    )
}
Alarm.InputContainer = function AlarmInputContainer({children, ...props}) {
    return (<InputContainer {...props}>{children}</InputContainer>
    )
}
Alarm.Input = function AlarmInput({children, ...props}) {
    return (<Input {...props}>{children}</Input>
    )
}
Alarm.Select = function AlarmSelect({children, ...props}) {
    return (<Select {...props}>{children}</Select>
    )
}
Alarm.Option = function AlarmOption({children, ...props}) {
    return (<Option {...props}>{children}</Option>
    )
}
Alarm.ButtonContainer = function AlarmButtonContainer({children, ...props}) {
    return (<ButtonContainer {...props}>{children}</ButtonContainer>
    )
}
Alarm.Button = function AlarmButton({children, ...props}) {
    return (<Button {...props}>{children}</Button>
    )
}
Alarm.DisplayAlarmContainer = function AlarmDisplayAlarmContainer({children, ...props}) {
    return (<DisplayAlarmContainer {...props}>{children}</DisplayAlarmContainer>
    )
}
 
export default Alarm;