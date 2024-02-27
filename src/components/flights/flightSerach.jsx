import { Autocomplete, Button, Container, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {  FLIGHTS_LIST_URL, ORIGIN_CITIES_URL } from "../../infra/urls";

export default function FlightsSerach({setFlights}) {

    const [originCityList, setOriginCityList] = useState([])
    const [selectedCity, setSelectedCity] = useState('')

    useEffect( ()=>{
        const fetchData = async ()=>{
            const response = await axios.get(ORIGIN_CITIES_URL)
            setOriginCityList(response.data)
        }
        fetchData()
    }, [])
    
    const handleRenderInput = (params)=>{
        return <TextField {...params} label="Origin City" />
    }

    const handleSearch = async ()=>{      
            const response = await axios.get(FLIGHTS_LIST_URL, {params:{origin_city: selectedCity}})
            setFlights(response.data)
        }
 

    return (
     
        <Container 
            component={'form'}
            sx={{marginTop: '1em', display: 'flex'}}>
            
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={[]}
            sx={{ width: 300 }}
            renderInput={handleRenderInput}/> 
            <Button onClick={handleSearch}>Search</Button>     

        </Container>
        
        
        
        
    )
}