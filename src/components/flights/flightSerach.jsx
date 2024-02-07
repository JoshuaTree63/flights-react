import { Autocomplete, TextField } from "@mui/material";

export default function FlightsSerach() {
    return (
        <>
        <h5>Search form</h5>
        <form>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={[]}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Look For Flights" />}/>  
        </form>
        
        </>
    )
}