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
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { orange, red } from '@mui/material/colors';
import { dark } from '@mui/material/styles/createPalette';

 



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

const myTheme ={
 
  palette: {
    mode: 'dark'
  //   primary: {
  //     main: orange[500],
  //   },
  //   secondary: {
  //     main: '#f50057',
  //   },
  // },
  // typography: {
  //   fontSize: 12
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
