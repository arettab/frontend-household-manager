import { Box } from '@mui/material';
import { mockData } from '../data';
import Events from './events';


const EventList = (props) => {
    return (
        <Box display="flex" gap="20px" flexDirection={"column"}>
            <h3>This Week</h3>
            {mockData.map ( (event) => {
                return (<Events {...event} /> )  
            })
            }
        </Box>
    )
}

export default EventList