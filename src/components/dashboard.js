import React from 'react';
import HohDashboard from './hohdashboard';
import MemberDashboard from './memberDashboard';
import Userfront from '@userfront/react'


const Dashboard = () => (
    Userfront.user.userId === 5 ? <HohDashboard /> : <MemberDashboard />
  );
export default Dashboard;