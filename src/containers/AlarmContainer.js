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
    }


    const [values, setValues] = useState(initialValues)
    const [open, setOpen] = useState(false)

    // useMemo prevents alarm duplication
    const audio = useMemo(() => new Audio("./alarm.ogg"), [])
    audio.loop = true
    audio.playbackRate = 0.8

    const checkAlarm = () => {
        if (localStorage.getItem("alarm") === props.amendedTimeOfDay) {
          audio.play()

        }
      }
      checkAlarm()

    useEffect(() => {
        checkAlarm()
    }, [])

    const setAlarm = () => {
        const alarmHoursArray = values.alarmHours.split("")
        const alarmMinutesArray = values.alarmMinutes.split("")
        if (isNaN(values.alarmHours)) {
          alert("alarm must be composed of number and entered in HH:MM format")
        }
        
        if (alarmHoursArray.length < 2 || alarmMinutesArray.length < 2) {
          alert("you must set alarm in HH:MM format")
          setValues({...values, alarmHours: "", alarmMinutes: ""})
          setValues({...values, alarmTime: ""})
        } else {
          setValues({...values, alarmTime: `${values.alarmHours}:${values.alarmMinutes} ${values.alarmMeridian}`})
          localStorage.setItem("alarm", `${values.alarmHours}:${values.alarmMinutes} ${values.alarmMeridian}`)
        }
      }

      const clearAlarm = () => {
        setValues({...values, alarmHours: "", alarmMinutes: "", alarmMeridian: "AM", alarmTime: ""})
        localStorage.removeItem("alarm")
        audio.pause()
      }  

    const handleInputs = (event) => {
        const {name, value} = event.target

        setValues({
            ...values,
            [name]: value
        })
    }

    return ( 
        <AlarmMain>
            <Alarm.InnerContainer>
                

                <Alarm.ControlsContainer className = {`${open ? "visible" : "invisible"}`}>
                    <Alarm.InputContainer>
                        <Alarm.Input 
                            type = "number"
                            name = "alarmHours"
                            value = {values.alarmHours}
                            placeholder = "HH"
                            min="1"
                            onChange = {handleInputs}
                        />
    
                        <Alarm.Input 
                            type = "number"
                            name = "alarmMinutes"
                            value = {values.alarmMinutes}
                            placeholder = "MM"
                            min="1"
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
                        <Alarm.Button 
                            onClick = {setAlarm}
                        >set alarm</Alarm.Button>
                        <Alarm.Button onClick = {clearAlarm}>clear alarm</Alarm.Button>
                    </Alarm.ButtonContainer>
                </Alarm.ControlsContainer>
                <Alarm.DisplayAlarmContainer>
                        <Alarm.DisplayAlarmText>{localStorage.getItem("alarm")}</Alarm.DisplayAlarmText>
                    </Alarm.DisplayAlarmContainer>
            </Alarm.InnerContainer>
        </AlarmMain>
     );
}
 
export default AlarmContainer;