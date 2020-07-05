import React from 'react'
import classes from './SidebarItem.css'
import { NavLink} from 'react-router-dom'
const sidebarItem = (props) => (
    <li className={classes.SidebarItem}>
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
)

export default sidebarItem