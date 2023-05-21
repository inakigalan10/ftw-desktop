import React, { useState } from 'react';
import './admin.css';

const AdminMenu = ({ activeTab, onTabClick }) => {
   return (
    <div className='menu'>
      <div
        className={`admin-item ${activeTab === 'users' ? 'admin-active' : ''}`}
        onClick={() => onTabClick('users')}
      >
        Listado de users
      </div>
      <div
        className={`admin-item ${activeTab === 'reports' ? 'admin-active' : ''}`}
        onClick={() => onTabClick('reports')}
      >
        Listado de reportes
      </div>
    </div>
  );
};

export default AdminMenu;
