import PropTypes from 'prop-types';

const Event = (props) => {
    
    return(
        <li>
            <h3>Title: {props.title}</h3>
            <h3>Description: {props.description}</h3>
            <h3>Time: {props.meetingTime}</h3>
            <h3>Cost: {props.cost}</h3>
            <h3>transportation: {props.transport}</h3>
        </li>
    )
};

Event.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(Date),
    cost: PropTypes.number.isRequired,
    transport: PropTypes.bool.isRequired,

}