import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import * as urls from "../../infra/urls"
import FlightsSerach from "./flightSerach"
import { Box, Button } from "@mui/material"
import { Outlet, useNavigate } from "react-router-dom"
import FlightsList from "./flightsList"
import { Stack } from "@mui/material";
import NewFlightModal from "./newFlightModal"
import AddIcon from '@mui/icons-material/Add'
import Fab from '@mui/material/Fab';
import { UserContext } from "../../context/userContext"
import { setNotificationContext } from "../../context/notificationContext"



export default function  FlightsPage () {

    const navigate = useNavigate()
    const user = useContext(UserContext)
    const setNotification = useContext(setNotificationContext) 

    const [flights, setFlights] = useState({results:[]})

    const [openAddFlightModal, setOpenAddFlightModal] = useState(false)

    const fatchDate = async() => {
        let urlToSend = urls.FLIGHTS_LIST_URL
        if (flights.results.length >0) {
            urlToSend = flights.next
        }
        
        try {
            const response = await axios.get(urlToSend)
            console.log(response)
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
      
        <Box sx={{overflow: 'hidden'}}>  
 
        <FlightsSerach setFlights={setFlights}/>

        <Stack direction={'row'} sx={{width:'100%'}}>
            <FlightsList flights={flights} loadMore = {fatchDate}/>
            <Outlet />
        </Stack>

        <Button color='secondary' onClick={()=> setNotification({open: true, msg: "going to orders"})}>Go to orders</Button>
        
        {user.user?.is_staff &&
            <>
            <Fab color="secondary" aria-label="add" 
                sx={{position: 'absolute',bottom: 16, right: 16,}}
                onClick={() => setOpenAddFlightModal(true)}>
                <AddIcon />
            </Fab>

            <NewFlightModal open={openAddFlightModal} setOpen={setOpenAddFlightModal}/>
            </>
        }

        </Box>
    )

}

