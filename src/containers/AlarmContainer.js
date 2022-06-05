import { useEffect, useState } from "react";
import Alarm from "../components/Alarm";
import { AlarmMain } from "../components/Alarm/styles/alarmStyles";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";


const AlarmContainer = () => {
    const initialValues = {
        alarmHours: "",
        alarmMinutes: "",
        alarmMeridian: "AM",
        alarmTime: "",
        currentTime : ""
    }

    const [values, setValues] = useState(initialValues)

    const getTime = () => {
        const time = new Intl.DateTimeFormat("en", {hour: `2-digit`, minute: `2-digit`})
        let formattedTime = time.format()

        setValues({...values, currentTime: formattedTime})
    }

    useEffect(() => {
        setInterval(getTime, 1000)
    }, [])

    return ( 
        <AlarmMain>
            <Alarm.InnerContainer>
                <Alarm.ControlsContainer>
                    <Alarm.InputContainer>
                        <Alarm.Input 
                            type = "number"
                            name = "alarmHours"
                            placeholder = "HH"
                        />
    
                        <Alarm.Input 
                            type = "number"
                            name = "alarmMinutes"
                            placeholder = "MM"
                        />
    
                        <Alarm.Select>
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