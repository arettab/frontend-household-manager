import { Box } from '@mui/material';
import Events from './events';

const mockData = [
    {
        title: "title1",
        cost:   5,
        user:   "user1",
        datetime: (new Date()).toUTCString(),
        transport: true,
        location: "location",
        description: "description",
        id: ""
    },
    {
        title: "title2",
        cost:   5,
        user:   "user2",
        datetime: (new Date()).toUTCString(),
        transport: true,
        location: "location",
        description: "description",
        id: ""
    },
]
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