import {
    AlarmMain,
    InnerContainer,
    ControlsContainer,
    Input,
    Select,
    Option,
    Button,
    DisplayAlarmContainer,
} from "./styles/alarmStyles"


const Alarm = ({children, ...props}) => {
    return ( <AlarmMain {...props}>{children}</AlarmMain> );
}

Alarm.InnerContainer = function AlarmInnerContainer({children, ...props}) {
    <InnerContainer {...props}>{children}</InnerContainer>
}
Alarm.ControlsContainer = function AlarmControlsContainer({children, ...props}) {
    <ControlsContainer {...props}>{children}</ControlsContainer>
}
Alarm.Input = function AlarmInput({children, ...props}) {
    <Input {...props}>{children}</Input>
}
Alarm.Select = function AlarmSelect({children, ...props}) {
    <Select {...props}>{children}</Select>
}
Alarm.Option = function AlarmOption({children, ...props}) {
    <Option {...props}>{children}</Option>
}
Alarm.Button = function AlarmButton({children, ...props}) {
    <Button {...props}>{children}</Button>
}
Alarm.DisplayAlarmContainer = function AlarmDisplayAlarmContainer({children, ...props}) {
    <DisplayAlarmContainer {...props}>{children}</DisplayAlarmContainer>
}
 
export default Alarm;