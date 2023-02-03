import Userfront from "@userfront/react";
import User from "./user";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
    if (!props.data || !props.data.household) {
        return (
        <div>
            <h2>
            It looks like you have not been added to a household. Would you like to start one?
            </h2>
            <div>
        <Link to="/addHouse">
        <button>Start a Household</button>
        </Link>
    </div>
            <button onClick={Userfront.logout}>Logout</button>
        </div>
    );
    } else {
        return (
        <div>
            <h2>Dashboard</h2>
            <User name={props.name} email={props.email} />
            <button onClick={Userfront.logout}>Logout</button>
        </div>
        );
    }
};


Dashboard.propTypes =  {
    onAddHousehold: PropTypes.func.isRequired,
    userData: PropTypes.array.isRequired,
};

export default Dashboard;
