import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';
import { ME_URL } from './infra/urls';
import { useContext, useEffect } from 'react';
import { SetUserContext } from './context/userContext';
import axios from 'axios';
import { Box} from '@mui/material';
import { Notification } from './notification/notification';
 


function App() {

  const setUser = useContext(SetUserContext)

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
  return (
    <>
      <Header />
      <Box paddingX={'24px'} sx={{maxWidth: 'sx'}}>
        <Outlet/>
      </Box>

      <Notification /> 
    </>
    

  )
}

export default App;
