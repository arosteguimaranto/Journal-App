import { Box } from '@mui/system'
import { Navbar } from '../components/Navbar';
import { SideBar } from '../components/SideBar';
import { Toolbar } from '@mui/material';

const drawerWith = 240;



export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar drawerWidth={drawerWith}/>

            <SideBar drawerWidth={drawerWith} />

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >

               <Toolbar/>


                {children}

            </Box>



        </Box>
    )
}
