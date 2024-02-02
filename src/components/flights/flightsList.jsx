import { List } from "@mui/material"
import FlightItem from "./flightItem"

export default function FlightsList ({flights}) {

    const item = flights.map((flight) => {
        return <FlightItem key={flight.id} flight={flight}/>
    }) 
    console.log(item)
    return (
        <List>
            {item}
        </List>
        
    )
    
}