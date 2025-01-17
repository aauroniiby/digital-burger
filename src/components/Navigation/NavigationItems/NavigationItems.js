import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link ="/" exact >Digital Burger</NavigationItem>
        <NavigationItem link ="/orders">Orders</NavigationItem>
        <NavigationItem link ="/menus">Menus</NavigationItem>
    </ul>
)

export default navigationItems