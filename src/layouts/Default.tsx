import React from 'react'
import { Link } from 'react-router-dom';
import Index from '../pages/Index';
import UseReducer from '../pages/UseReducer';

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
  }
];

function Default({ children }: DefaultProps) {

  return (
    <div className='layout'>
      <nav>

        {navs.map(nav => (
          <Link to={nav.path} key={nav.path}>
            {nav.label}
          </Link>
        ))}
      </nav>
      <main>
        {children}
      </main>
    </div>

  )
}

export default Default
