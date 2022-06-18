import {
    AlarmMain,
    InnerContainer,
    ControlsContainer,
    Input,
    InputContainer,
    Option,
    Button,
    ButtonContainer,
    DisplayAlarmContainer,
    DisplayAlarmText,
    DisplayAlarmSpan
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
Alarm.DisplayAlarmText = function AlarmDisplayAlarmText({children, ...props}) {
    return (<DisplayAlarmText {...props}>{children}</DisplayAlarmText>
    )
}
Alarm.DisplayAlarmSpan = function AlarmDisplayAlarmSpan({children, ...props}) {
    return (<DisplayAlarmSpan {...props}>{children}</DisplayAlarmSpan>
    )
}
 
export default Alarm;