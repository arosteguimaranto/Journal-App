import { } from '@mui/system'

const drawerWith = 240;



export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* Nav bar */}

            {/*Side bar */}

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
