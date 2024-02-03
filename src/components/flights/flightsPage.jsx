import axios from "axios"
import { useEffect, useState } from "react"
import * as urls from "../../infra/urls"
import FlightsSerach from "./flightSerach"
import { Button } from "@mui/material"
import { Outlet, useNavigate } from "react-router-dom"
import FlightsList from "./flightsList"
import { Stack } from "@mui/material";


export default function  FlightsPage () {

    const navigate = useNavigate()
    const [flights, setFlights] = useState({results:[]})

    const fatchDate = async() => {
        let urlToSend = urls.FLIGHTS_LIST_URL
        if (flights.results.length >0) {
            urlToSend = flights.next

        }
        try {
            const response = await axios.get(urlToSend)
            console.log(response)
            // setFlights(response.data)
            setFlights(
                {...flights, 
                next: response.data.next,
                results: [...flights.results ,...response.data.results]}
            )
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(
        ()=>{            
            fatchDate()
        }
        ,[]
    )    
    return(
        <>
        <h2>Flights page</h2>
        <FlightsSerach />

        <Stack direction={'row'}>
            <FlightsList flights={flights} loadMore = {fatchDate}/>
            <Outlet />
        </Stack>

        <Button onClick={()=>{navigate('/orders')}}>Go to orders</Button>
        </>
    )

}

