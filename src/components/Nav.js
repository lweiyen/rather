import React from 'react'
import { NavLink } from 'react-router-dom'
import NavUser from './NavUser';
import Logout from './Logout';

const Nav = (props) => (
  <nav className='nav'>
    <ul>
      <li>
        <NavLink to='/' exact activeClassName='active'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/add' activeClassName='active'>
          New Question
        </NavLink>
      </li>
      <li>
        <NavLink to='/leaderboard' activeClassName='active'>
          Leaderboard
        </NavLink>
      </li>
      <NavUser />
      <Logout />
    </ul>
  </nav>
);

export default Nav;