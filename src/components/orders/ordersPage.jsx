import {  Button } from "@mui/material";
import axios from "axios";
import { FILE_DOWNLOAD_URL } from "../../infra/urls";

var fileDownload = require('js-file-download');

export default function OrderPage () {

    const downloadFile = async () => {
        const response = await axios.get(FILE_DOWNLOAD_URL, {responseType: ' blob'})
        console.log(response)
        fileDownload(response.data);
    }


    return(

        <>
        
        <h2>Orders page</h2>

        {/* <Box sx={{mt: '20px'}}>
            <Grid container spacing={5} rowSpacing={1} columnSpacing={5} justifyContent={'center'} justifyItems={'center'}>
              
                <Grid item lg={8} md={6} sx={12} justifyContent={'center'} justifySelf={'center'} alignItems={'center'} >
                    <Paper sx={{width: '100%', height: '300px', border: 'solid 1px white'}}>
                        Item 1
                    </Paper>
                </Grid>
                    
                <Grid item lg={4} md={6} sx={12}>                 
                    <Paper sx={{width: '100%', height: '300px', border: 'solid 1px white'}}>
                        <p style={{width:'500px'}}>Item 2</p>
                    </Paper>
                </Grid>

                <Grid item lg={8} md={6} sx={12}>
                    <Paper sx={{width: '100%', height: '300px', border: 'solid 1px white'}}>
                        Item 3
                    </Paper>
                </Grid>
                    
                <Grid item lg={4} md={6} sx={12}>                 
                    <Paper sx={{width: '100%', height: '300px', border: 'solid 1px white'}}>
                        Item 4
                    </Paper>
                </Grid>
            </Grid>
        </Box> */}

        <Button onClick={downloadFile}>Test Download file</Button>
        </>
    )
}
