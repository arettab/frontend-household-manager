import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Event = (props) => {
    return(
        <Box
        // backgroundColor={colors.primary[400]} padding="20px"
        >
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
         <h3>Title: {props.title}</h3>
         <h3>Time: {props.datetime}</h3>
        </AccordionSummary>
        <AccordionDetails>
        <h3>Description: {props.description}</h3>
        <h3>Cost: {props.cost}</h3>
            <h3>transportation: {props.transport}</h3>
            <h3>location {props.location}</h3>
        </AccordionDetails>
      </Accordion>
      
            
            
        </Box>
    )
};

Event.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(Date),
    cost: PropTypes.number.isRequired,
    transport: PropTypes.bool.isRequired,

}

export default Event;