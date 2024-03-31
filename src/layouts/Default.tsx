import React from 'react'
import { NavLink } from 'react-router-dom';
import Index from '../pages/Index';
import UseReducer from '../pages/UseReducer';
import UseContext from '../pages/UseContext';
import ZustandCounter from '../pages/ZustandCounter';
import ZustandCart from '../pages/ZustandCart';

type DefaultProps = { children: React.ReactNode }
// eslint-disable-next-line react-refresh/only-export-components
export const navs = [
  {
    label: 'home',
    path: '/',
    element: <Index />
  },
  {
    label: 'useReducer',
    path: '/use-reducer',
    element: <UseReducer />
  },
  {
    label: 'useContext',
    path: '/use-context',
    element: <UseContext />
  },
  {
    label: 'Zustand Counter',
    path: '/zustand-counter',
    element: <ZustandCounter />
  },
  {
    label: 'Zustand Cart',
    path: '/zustand-cart',
    element: <ZustandCart />
  },
];

function Default({ children }: DefaultProps) {

  return (
    <div className='layout'>
      <nav>
        {navs.map(nav => (
          <NavLink to={nav.path} key={nav.path} className={({ isActive }: {
            isActive: boolean;
          }) =>
            isActive ? "active" : ""
          }>
            {nav.label}
          </NavLink>
        ))}
      </nav>
      <main>
        {children}
      </main>
    </div>

  )
}

export default Default
