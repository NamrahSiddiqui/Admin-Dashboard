import React from 'react'
import AdminSidebar from '../components/adminSidebar'

const Dashboard = () => {
  return (
    <div className='admin-container'>

      {/* Sidebar */}
      <AdminSidebar/>
      <main>Main</main>
      {/* Main */}
    </div>
  )
}

export default Dashboard
