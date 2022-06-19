import { useEffect, useMemo, useState } from "react";
import Alarm from "../components/Alarm";
import { AlarmMain } from "../components/Alarm/styles/alarmStyles";
import Clock from "../components/Clock";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const AlarmContainer = (props) => {
    const initialValues = {
        alarmHours: "",
        alarmMinutes: "",
        alarmTime: "",
    }

    const [values, setValues] = useState(initialValues)
    const [open, setOpen] = useState(false)

    // useMemo prevents alarm duplication
    const audio = useMemo(() => new Audio("./alarm.ogg"), [])
    audio.loop = true
    audio.playbackRate = 0.8

    const checkAlarm = () => {
        if (localStorage.getItem("alarm") === props.timeOfDay) {
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
          setValues({...values, alarmTime: `${values.alarmHours}:${values.alarmMinutes}`})
          localStorage.setItem("alarm", `${values.alarmHours}:${values.alarmMinutes}`)
        }
      }

      const clearAlarm = () => {
        setValues({...values, alarmHours: "", alarmMinutes: "", alarmTime: ""})
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
                <div style={{marginRight: "1rem"}}>
                <Clock.Button
                        onClick={() => setOpen(!open)}
                    >{ open ? "hide" : "alarm"}
                        <Clock.ButtonSpan>
                            { open ? <FaChevronUp style={{color: "white"}} /> : <FaChevronDown style={{color: "white"}} /> }
                        </Clock.ButtonSpan>
                </Clock.Button>
                <Alarm.DisplayAlarmContainer className =  {`${localStorage.getItem("alarm") ? "visible" : "invisible"}`}>
                    <Alarm.DisplayAlarmText>alarm set for</Alarm.DisplayAlarmText>
                    <Alarm.DisplayAlarmSpan>{localStorage.getItem("alarm")}</Alarm.DisplayAlarmSpan>
                </Alarm.DisplayAlarmContainer>
                </div>

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
                    </Alarm.InputContainer>

                    <Alarm.ButtonContainer>
                        <Alarm.Button 
                            onClick = {setAlarm}
                        >set alarm</Alarm.Button>
                        <Alarm.Button onClick = {clearAlarm}>clear alarm</Alarm.Button>
                    </Alarm.ButtonContainer>
                </Alarm.ControlsContainer>
            </Alarm.InnerContainer>
        </AlarmMain>
     );
}
 
export default AlarmContainer;