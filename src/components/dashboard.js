<<<<<<< HEAD
import Userfront from "@userfront/react";
import User from "./user";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IconButton } from "@mui/material";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Topbar from "./topbar";

const Dashboard = (props) => {
    return (
        <div>
            <Topbar />
            {!props.userData || !props.userData.tenantId || props.userData.tenantId !== 'vbqvm99n' ? (
                <div>
                    <h2>
                        It looks like you have not been added to a household. Would you like to start one?
                    </h2>
                    <div>
                        <Link to="/addHouse">
                            <IconButton type="button">
                                <GroupAddIcon />
                            </IconButton>
                        </Link>
                    </div>
                    <button onClick={Userfront.logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>Dashboard</h2>
                    <User name={props.userData.name} />
                    <Link to='/invite'>
                        <button>Invite Household Members</button>
                    </Link>
                    <button onClick={Userfront.logout}>Logout</button>
                </div>
            )}
        </div>
    );
};



Dashboard.propTypes =  {
    onAddHousehold: PropTypes.func.isRequired,
    userData: PropTypes.array.isRequired,
};

export default Dashboard;
=======
const Dashboard = () => (
    <div>
        <h2>Dashboard</h2>
    </div>
)

export default Dashboard;
>>>>>>> 21b790f73fb4b713f5445f9f6f42545cf41ee23f
