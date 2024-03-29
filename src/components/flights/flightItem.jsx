import { IconButton, ListItem, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


export default function FligthItem({flight}) {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/flights/${flight.id}`)
    }

    return(
        <ListItem>
            {/* <Box> */}
            <Paper elevation={3} 
                sx={{width: '100%',  height: 60, 
                    textAlign: 'center', 
                    display:'flex', flexDirection:'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingX: '1em'}}>
                <Typography>{`${flight.origin_city} => ${flight.dest_city}`}</Typography>
                <IconButton>
                    <ArrowCircleRightIcon onClick={handleClick} color="primary"
                        // sx={{
                        //     color: 'green'
                        // }}
                        />
                </IconButton>
            </Paper>         
        </ListItem>
    )
}