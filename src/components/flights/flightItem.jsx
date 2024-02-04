import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FlightItem({flight}) {

    const navigate = useNavigate()
    return (
        <ListItem>
            <ListItemButton onClick={()=>navigate(`/flights/${flight.id}`)}>
                <ListItemText primary={`${flight.origin_city} => ${flight.dest_city}`} />
            </ListItemButton>
        </ListItem>
    )
}

