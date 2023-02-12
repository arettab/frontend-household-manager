import Userfront from "@userfront/react";
import PropTypes from 'prop-types';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { IconButton } from "@mui/material";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Topbar from "./topbar";
import Sidebar from './sidebar';

const Dashboard = (props) => {
    const location = useLocation();
    return (
        <div>
            <Topbar />
            <Sidebar userData={props.userData} />
            {!props.userData || !props.userData.tenantId || props.userData.tenantId !== 'vbqvm99n' ? (
                <div>
                    <h2>
                        It looks like you have not been added to a household. Would you like to start one?
                    </h2>
                    <div>
                        <Link to="/addHouse" state={{background: location}}>
                            <IconButton type="button">
                                <GroupAddIcon />
                            </IconButton>
                        </Link>
                        <Outlet />
                    </div>
                </div>
            ) : (
                <div>
                    <h2>Dashboard</h2>
                </div>
            )}
        </div>
    );
};

Dashboard.propTypes = {
    userData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Dashboard;
