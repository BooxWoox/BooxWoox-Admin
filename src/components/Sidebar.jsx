import React from 'react'
import '../css/Sidebar.css'
import { NavLink, useLocation } from 'react-router-dom'

const Sidebar = ({ drawerOpen }) => {
  const Links = [
    {
      name: 'Book Approval System',
      url: '/bookApprovalSys',
    },
    {
      name: 'Admin Parameters',
      url: '/adminParams',
    },
    {
      name: 'All Users',
      url: '/allUsers',
    },
    {
      name: 'All Orders',
      url: '/allOrders',
    },
    {
      name: 'Assigned Delivery',
      url: '/assignedDelivery',
    },
    {
      name: 'Late Return Alert Section',
      url: '/lateReturn',
    },
    {
      name: 'Blog Admins',
      url: '/blogAdmins',
    },
    {
      name: 'Refund Transactions',
      url: '/Transactions',
    },
  ]

  const location = useLocation().pathname

  return (
    <div className="Sidebar" id={drawerOpen ? 'open' : ''}>
      <div className="menu">
        {Links.map((link) => {
          return (
            <div
              className={
                location.startsWith(link.url) ? 'links activemenu' : 'links'
              }
              key={link.url}
            >
              <NavLink
                id="sidebarLink"
                exact
                to={link.url}
                activeClassName="active"
              >
                <p>{link.name}</p>
              </NavLink>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
