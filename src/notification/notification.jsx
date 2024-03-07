import { Snackbar } from "@mui/material"
import { useState } from "react"
import { setNotificationContext } from "../context/notificationContext"

export const Notification = ({children})=>{

    const [notification, setNotification] = useState({
        notify: false,
        msg: "",
        severity: "success"
    })


    const hendelClose = (event, reason) =>{
       if (reason === 'clickaway') {
        // return;
       }

       setNotification({...notification, open: false})
    }

    return(
        <>
        <setNotificationContext.Provider value={setNotification}>
            {children}
        </setNotificationContext.Provider>
            
        <Snackbar 
        open={notification.open}
        autoHideDuration={6000}
        onClose={hendelClose}
        message={notification.msg}
        // action={action}
        />
        </>
        
    )

}