import axios from "axios"
import { useEffect, useState } from "react"
import * as urls from "../../infra/urls"
import FlightsSerach from "./flightSerach"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import FlightsList from "./flightsList"

export default function  FlightsPage () {

    const navigate = useNavigate()
    const [flights, setFlights] = useState([])

    useEffect(
        ()=>{
            const fatchDate = async() => {
                try {
                    const response = await axios.get(urls.FLIGHTS_LIST_URL)
                    console.log(response)
                    setFlights(response.data.results)
                } catch (e) {
                    console.log(e)
                }
            }
            fatchDate()
        }
        ,[]
    )    
    return(
        <>
        <h2>Flights page</h2>
        <FlightsSerach />
        <FlightsList flights={flights}/>

        <Button onClick={()=>{navigate('/orders')}}>Go to orders</Button>
        </>
    )

}

