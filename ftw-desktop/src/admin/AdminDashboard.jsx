import React, { useState } from 'react';
import AdminMenu from './AdminMenu';
import UsersList from './UserList/UsersList';
import ReportesList from './ReportList/ReportesList';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <AdminMenu activeTab={activeTab} onTabClick={handleTabClick} />
        {activeTab === 'users' ? <UsersList /> : <ReportesList />}
    </div>
  );
};

export default AdminDashboard;
