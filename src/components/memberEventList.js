import { Box } from '@mui/material';
import { mockData } from '../data';
import Events from './events';
import Userfront from "@userfront/react";


const MemberEventList = () => {
    return (
        <Box display="flex" gap="20px" flexDirection={"column"}>
            <h3>Events</h3>
            {mockData.map ( (event) => {
                if (event.user === Userfront.user.name) {
                    return (<Events {...event} /> )  
                }
                return null;
            })}
        </Box>
    )
    }

export default MemberEventList