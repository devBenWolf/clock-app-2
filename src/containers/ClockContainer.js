import {useState, useEffect} from "react"
import Clock from "../components/Clock";
import { Main } from "../components/Clock/styles/clockStyles";
import {FaChevronDown, FaChevronUp, FaSun, FaMoon} from "react-icons/fa"
import { GlobalStyles } from "../globalStyles";
import AlarmContainer from "./AlarmContainer";

const ClockContainer = () => {
    const [timeOfDay, setTimeOfDay] = useState("")
    const [altTimeOfDay, setAltTimeOfDay] = useState("")
    const [meridian, setMeridian] = useState("")
    const [background, setBackground] = useState(null)
    const [greeting, setGreeting] = useState("")
    const [quote, setQuote] = useState("")
    const [location, setLocation] = useState("")
    const [timezone, setTimezone] = useState("")
    const [country, setCountry] = useState("")
    const [currency, setCurrency] = useState("")
    const [capital, setCapital] = useState("")
    const [buttonClick, setButtonClick] = useState(false)

    const getTimeValues = () => {
        const timeValues = new Intl.DateTimeFormat("en", {hour: "numeric", minute: "numeric"})
        let formattedTime = timeValues.format()
        
        
        // separate hours, minutes, meridian modifier
        const [time, modifier] = formattedTime.split(" ")
        let [hour, minute] = formattedTime.split(":")
        setMeridian(modifier)

        // change 12hour to 24hour
        if (hour === "12") {
            hour = "00"
        }

        if (modifier === "PM") {
            hour = parseInt(hour, 10) + 12
        }

        let convertedTime = `${hour}:${minute}`
        let noModifier = convertedTime.slice(0, -2)
        setTimeOfDay(noModifier)
        setAltTimeOfDay(noModifier)

        // isolate hours 
        let convertedHour = convertedTime.slice(0, -6)
        

        // use hours to determine day or night background
        if (convertedHour >= 6 && convertedHour <= 18 ) {
            setBackground(true)
        } else {
            setBackground(false)
        }
        console.log(convertedHour)
        // set greeting based on time of day
        if (convertedHour >= 6 && convertedHour <= 12) {
            setGreeting("Good Morning, it's currently...")
        } else if (convertedHour >= 12 && convertedHour <= 17) {
            setGreeting("Good Afternoon, it's currently...")
        } else if (convertedHour > 17 && convertedHour <= 20)  {
            setGreeting("Good Evening, it's currently...")
        } else {
            setGreeting("Good Night, it's currently...")
        }
    }

    // get geolocation data
    const getLocationData = async () => {
        const response = await fetch("https://ipwhois.app/json/")
        const locationData = await response.json()
        setLocation(locationData.city)
        setTimezone(locationData.timezone)
        setCountry(locationData.country)
        setCurrency(locationData.currency)
        setCapital(locationData.country_capital)
    }

    // get quotations
    const getQuotes = async () => {
        const response = await fetch("https://programming-quotes-api.herokuapp.com/Quotes/random")
        const data = await response.json()
        setQuote(data)
    }

    useEffect(() => {
        setInterval(getTimeValues, 1000)
        getTimeValues()
        getLocationData()
        getQuotes()
    }, [])

    console.log(background)
    const amendedTimeOfDay = timeOfDay.length < 6 ? `0${timeOfDay}${meridian}` : `${timeOfDay}${meridian}`


    const showMenu = {
        backgroundColor: background ? "hsl(var(--clr-white) / 0.9)" : "hsl(var(--clr-dark))",
        color: background ? "hsl(var(--clr-dark))" : "hsl(var(--clr-white))",
        display: buttonClick ? "grid" : "none",
        animationName: "fade_in_show",
        animationDuration: "0.5s",

    }

    const showQuote = {
        backgroundColor: background ? "hsl(var(--clr-dark) / 0.6)" : "hsl(var(--clr-dark) / 0)",
        color: background ? "hsl(var(--clr-white))" : "hsl(var(--clr-dark))",
        display: buttonClick ? "none" : "grid",
        animationName: "fade_in_show",
        animationDuration: "0.5s",
    }

    return ( 
        <>
        <GlobalStyles />
        <Main 
            style={{backgroundImage: (background ? "url(/assets/desktop/bg-image-daytime.jpg)" : "url(/assets/desktop/bg-image-nighttime.jpg)"), backgroundSize: "cover"}}>
            <Clock.QuoteArticle style={showQuote}>
                <Clock.H5 >{quote.en}</Clock.H5>
                <Clock.H5  fontWeight="bold" margin = "2rem 0 0 0">{quote.author}</Clock.H5>
            </Clock.QuoteArticle>
            <AlarmContainer amendedTimeOfDay={amendedTimeOfDay} />
            <Clock.InfoArticle>
                <Clock.SalutationDiv>
                    {background ? <FaSun style={{height: "50px", width: "50px", margin: " 0 0 1rem 0"}} /> : <FaMoon />}
                    <Clock.H4>{greeting}</Clock.H4>
                </Clock.SalutationDiv>
                <Clock.H1 style={{whiteSpace: "nowrap"}}>{timeOfDay}<Clock.MeridianSpan>{meridian}</Clock.MeridianSpan></Clock.H1>
                <Clock.H3>{location}</Clock.H3>
            </Clock.InfoArticle>
            <Clock.ButtonArticle>
                <Clock.Button
                    onClick={() => setButtonClick(!buttonClick)}
                >{ buttonClick ? "Less" : "More"}
                    <Clock.ButtonSpan>
                        { buttonClick ? <FaChevronUp style={{color: "white"}} /> : <FaChevronDown style={{color: "white"}} /> }
                    </Clock.ButtonSpan>
                </Clock.Button>
            </Clock.ButtonArticle>

            <Clock.MenuArticle style={showMenu}>
                <Clock.MenuDiv>
                    <Clock.H6>current timezone</Clock.H6>
                    <Clock.H2>{timezone}</Clock.H2>
                </Clock.MenuDiv>
                <Clock.MenuDiv>
                    <Clock.H6>country</Clock.H6>
                    <Clock.H2>{country}</Clock.H2>
                </Clock.MenuDiv>
                <Clock.MenuDiv>
                    <Clock.H6>capital</Clock.H6>
                    <Clock.H2>{capital}</Clock.H2>
                </Clock.MenuDiv>
                <Clock.MenuDiv>
                    <Clock.H6>currency</Clock.H6>
                    <Clock.H2>{currency}</Clock.H2>
                </Clock.MenuDiv>
            </Clock.MenuArticle>
        </Main>
        </>
     );
}
 
export default ClockContainer;