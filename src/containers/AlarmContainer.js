import { useEffect, useMemo, useState } from "react";
import Alarm from "../components/Alarm";
import { AlarmMain } from "../components/Alarm/styles/alarmStyles";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";


const AlarmContainer = (props) => {
    const initialValues = {
        alarmHours: "",
        alarmMinutes: "",
        alarmMeridian: "AM",
        alarmTime: "",
        currentTime : ""
    }

    const [values, setValues] = useState(initialValues)

    const handleInputs = (event) => {
        const {name, value} = event.target
    }

    

    const getTime = () => {
        const time = new Intl.DateTimeFormat("en", {hour: `2-digit`, minute: `2-digit`})
        let formattedTime = time.format()

        setValues({...values, currentTime: formattedTime})
    }

    useEffect(() => {
        setInterval(getTime, 1000)
    }, [])

    const amendedTimeOfDay = props.amendedTimeOfDay
    console.log(amendedTimeOfDay)
    console.log(values.currentTime)

    return ( 
        <AlarmMain>
            <Alarm.InnerContainer>
                <Alarm.ControlsContainer>
                    <Alarm.InputContainer>
                        <Alarm.Input 
                            type = "number"
                            name = "alarmHours"
                            value = {values.alarmHours}
                            placeholder = "HH"
                            onChange = {handleInputs}
                        />
    
                        <Alarm.Input 
                            type = "number"
                            name = "alarmMinutes"
                            value = {values.alarmMinutes}
                            placeholder = "MM"
                            onChange = {handleInputs}
                        />
    
                        <Alarm.Select
                            name = "alarmMeridian"
                            value = {values.alarmMeridian}
                            onChange = {handleInputs}
                        >
                            <Alarm.Option default value = "AM">AM</Alarm.Option>
                            <Alarm.Option value = "PM">PM</Alarm.Option>
                        </Alarm.Select>
                    </Alarm.InputContainer>

                    <Alarm.ButtonContainer>
                        <Alarm.Button>set alarm</Alarm.Button>
                        <Alarm.Button>stop alarm</Alarm.Button>
                        <Alarm.Button>clear alarm</Alarm.Button>
                    </Alarm.ButtonContainer>
                    <Alarm.DisplayAlarmContainer>

                    </Alarm.DisplayAlarmContainer>
                </Alarm.ControlsContainer>
            </Alarm.InnerContainer>
        </AlarmMain>
     );
}
 
export default AlarmContainer;