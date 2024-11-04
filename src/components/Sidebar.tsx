import { ReactNode } from 'react';
import ChartIcon from '../assets/icons/chart.svg?react'
import CaseIcon from '../assets/icons/case.svg?react'
import UserIcon from '../assets/icons/user.svg?react'
import CheckoutIcon from '../assets/icons/checkout.svg?react'
import SettingsIcon from '../assets/icons/settings.svg?react'
import { NavLink } from 'react-router-dom';

interface NavLinkItem {
  id: number
  title: string
  icon: ReactNode
  path: string
}

const navLinksConfig: NavLinkItem[] = [
  {
    id: 1,
    title: 'Overview',
    icon: <ChartIcon />,
    path: ''
  },
  {
    id: 2,
    title: 'Products',
    icon: <CaseIcon />,
    path: 'products'
  },
  {
    id: 3,
    title: 'Orders',
    icon: <UserIcon />,
    path: 'orders'
  },
  {
    id: 4,
    title: 'Checkout',
    icon: <CheckoutIcon />,
    path: 'checkout'
  },
  {
    id: 5,
    title: 'Settings',
    icon: <SettingsIcon />,
    path: 'settings'
  }
]

const Sidebar = () => {
  return (
    <div className="w-14 min-w-14 lg:w-sidebar lg:min-w-sidebar border-r border-r-gray-100 pt-4 pr-2">
      <ul>
        {navLinksConfig.map((item) => (
          <li
            key={item.id}
            className="[&:not(:last-child)]:mb-2">
            <NavLink
              to={item.path}
              className={({ isActive }) => {
                const basicClasses = 'flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-50 transition-colors duration-200 '
                const activeClass = isActive ? 'text-primary' : 'text-gray-300'

                return `${basicClasses} ${activeClass}`
              }}
            >
              {item.icon}
              <span className="hidden lg:block">{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar;