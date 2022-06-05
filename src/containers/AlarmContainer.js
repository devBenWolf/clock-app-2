import Alarm from "../components/Alarm";
import { AlarmMain } from "../components/Alarm/styles/alarmStyles";


const AlarmContainer = () => {
    return ( 
        <AlarmMain>
            <Alarm.InnerContainer>
                <Alarm.ControlsContainer>
                    <Alarm.Input 
                        type = "number"
                        name = "alarmHours"
                        min  = "1"
                        max  = "12"
                        required
                        placeholder = "HH"
                    />

                    <Alarm.Input 
                    
                    />

                    <Alarm.Select>
                        <Alarm.Option></Alarm.Option>
                        <Alarm.Option></Alarm.Option>
                    </Alarm.Select>
                </Alarm.ControlsContainer>
            </Alarm.InnerContainer>
        </AlarmMain>
     );
}
 
export default AlarmContainer;