import { List } from "@mui/material"
import FlightItem from "./flightItem"
import InfiniteScroll from "react-infinite-scroller"

export default function FlightsList ({flights, loadMore}) {

    const {count, next, results} = flights

    const items = results.map((flight) => {
        return <FlightItem key={flight.id} flight={flight}/>
    }) 
    
    return (
    <>
        <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={next != null}
        loader={<div className="loader" key={0}>Please hold, fatching more flights for you</div>}
        >
            {items} 
        </InfiniteScroll>    
    </>   
        
    )    
}