import { createTheme } from "@mui/material/styles";
import{red} from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#9A2EFE'
        },
        secondary: {
            main: '#BE81F7'
        },
        error: {
            main: red.A400
        }
    }
})

//