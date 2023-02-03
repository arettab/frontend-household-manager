import PropTypes from 'prop-types';

const User = (props) => {
    
    return (
        <li>
            <h3>name: {props.name}</h3>
        </li>
    )
};

User.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};
export default User;