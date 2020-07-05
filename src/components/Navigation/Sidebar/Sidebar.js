import React from 'react'
import classes from './Sidebar.css'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import SidebarItem from './SidebarItem/SidebarItem';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

const sidebar = () => (
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
            paper: classes.drawerPaper,
        }}
        anchor="left"
    >
        <div className={classes.toolbar} />
        <Divider />
        <List>
        <SidebarItem link ="/" exact >Porosite</SidebarItem>
        <SidebarItem link ="/menus" exact >Menyte</SidebarItem>
        <SidebarItem link ="/" exact >Raportet</SidebarItem>
        <SidebarItem link ="/" exact >Marketingu</SidebarItem>
        <SidebarItem link ="/" exact >Reviews</SidebarItem>
        <SidebarItem link ="/" exact >Ckyqu</SidebarItem>
        </List>
    </Drawer>
)

export default sidebar