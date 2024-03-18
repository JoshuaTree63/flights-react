import * as React from 'react';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from '@mui/material';

export default function DarkModeSwitch({ setChecked }) {
    // console.log(setChecked)

    const [checked, setCheckedState] = React.useState(false);
    

    const handleChange = (event) => {
        setCheckedState(event.target.checked);
        setChecked(event.target.checked); // Update the parent component's state
      };

        const darkTheme = createTheme({
            palette:{
                mode: checked ? 'dark' : 'light', 
            },
        });

  return (
    <ThemeProvider theme={darkTheme}>
        <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}            
        />
    </ThemeProvider>

  );
}