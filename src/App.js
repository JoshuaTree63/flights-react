import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';
import { ME_URL } from './infra/urls';
import { useContext, useEffect, useState } from 'react';
import { SetUserContext } from './context/userContext';
import axios from 'axios';
import { Box, Paper, Switch, createTheme} from '@mui/material';
import { Notification } from './notification/notification';
import { ThemeProvider } from '@emotion/react';
 

function App() {

  const setUser = useContext(SetUserContext)
  const [darkMode, setDarkMode] = useState(false);

  useEffect(
    ()=>{  
      const fetchData = async ()=>{
        const token = localStorage.getItem('token')
        if(token) {
          const meResponse = await axios.get(
            ME_URL, {headers: {Authorization: `Bearer ${token}`}})
        console.log(meResponse)
        setUser({
          user: {...meResponse.data}
          })
          }
        }
        fetchData()
    }, []
  )

  
const myTheme =({
  palette: {    
    mode: darkMode ? 'dark' : 'light',       
    },
  });

const theme = createTheme(myTheme)


  return (
   
    <>
      <Header /> 
        <ThemeProvider theme={theme}>
        <Paper style={{height: '100mv'}}>
        <Switch checked={darkMode} onChange={()=> setDarkMode(!darkMode)}/> 

        <Box paddingX={'320px'} sx={{ width: '100vw', height: '100vh' }}>
        <Outlet/>
        </Box>
        <Notification/>
      </Paper>
      
      </ThemeProvider>
    </>
    

  )
}

export default App;
