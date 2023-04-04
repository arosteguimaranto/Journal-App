import { Box } from '@mui/system'
import { Navbar } from '../components/Navbar';
import { SideBar } from '../components/SideBar';

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

                {/* Tool Bar*/}


                {children}

            </Box>



        </Box>
    )
}
