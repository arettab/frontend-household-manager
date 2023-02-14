import { Box } from '@mui/material';
import { mockData } from '../data';
import HohEvent from './HohEvents';


const HohEventList = () => {
    return (
        <Box display="flex" gap="20px" flexDirection={"column"}>
            <h3>Events</h3>
            {mockData.map ( (event) => {
                return (<HohEvent {...event} /> )  
            })
            }
        </Box>
    )
}

export default HohEventList