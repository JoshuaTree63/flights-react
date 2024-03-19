import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import FlightsPage from './components/flights/flightsPage';
import OrdersPage from './components/orders/ordersPage'; 
import FlightDetails from './components/flights/flightsDetails';
import LoginPage from './components/login/loginPage';
import UserProvider from './context/userContext';
import { Notification } from './notification/notification';
import { CssBaseline, ThemeProvider, createTheme} from '@mui/material';
import { green, lime} from '@mui/material/colors';
import axios from 'axios';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:
    [
      {
        path: '/',
        element: <FlightsPage />,
        children:[{
          path: '/flights/:flightId',
          element: <FlightDetails />
        }]
      },
      {
        path: '/orders',
        element: <OrdersPage />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])

axios.interceptors.request.use(
  (config) =>{

    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }
)

axios.interceptors.response.use(
  (response) =>{
    if (response.status === 500) {
      response.data['isServerError'] = true      
    }
    response.data['isServerError'] = false 
    return response
  }
)


const myTheme ={
 
  palette: {    
    primary: {
      main: lime[500],
    },
    secondary: {
      main: green[600],
    },
    
  },
  typography: {
    fontSize: 12
  },
}

const theme = createTheme(myTheme)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>   
    <CssBaseline />
    <Notification>
      <UserProvider>
        <RouterProvider router={router} />    
      </UserProvider>
    </Notification> 
  </ThemeProvider>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
