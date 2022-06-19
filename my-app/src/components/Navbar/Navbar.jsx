import { AppBar, Container, Paper, Typography } from '@material-ui/core';
import React from 'react'
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import classes from './Navbar.module.css'


const Navbar = (props) => {


  let friendElement = props.state.map(f => <Friends name={f.name} id={f.id} photo={f.photo} />)

  return (
    <nav className={classes.nav}>
      <Container fixed>
        <div className={classes.item}>
          <p />
          <NavLink to="/profile" activeClassName={classes.activLinks}>
            <Typography>Profile</Typography>
          </NavLink>
        </div>
        <p />
        <div className={classes.item}>
          <NavLink to="dialogs" activeClassName={classes.activLinks}>
            <Typography>Messages</Typography>
          </NavLink>
        </div>
        <p />
        <div className={classes.item}>
          <NavLink to='news' activeClassName={classes.activLinks}>
            <Typography>News</Typography>
          </NavLink>
        </div>
        <p />
        <div className={classes.item}>
          <NavLink to='music' activeClassName={classes.activLinks}>
            <Typography>Music</Typography>
          </NavLink>
        </div>
        <p />
        <div className={classes.item}>
          <NavLink to='settings' activeClassName={classes.activLinks}>
            <Typography>Settings</Typography>
          </NavLink>
        </div>
        <p />
        <div className={classes.item}>
          <NavLink to='users' activeClassName={classes.activLinks}>
            <Typography>Users</Typography>
          </NavLink>
        </div>
        <div className={classes.transition}></div>
        <div className={classes.friendItem}>
          <Typography>
            Friends:
          </Typography>
        </div>
        <p />
        {friendElement}
      </Container>
    </nav>
  )
}
export default Navbar;

/*<nav className={classes.nav}>


<div className={classes.item}>
  <p />
  <NavLink to="/profile" activeClassName={classes.activLinks}>Profile</NavLink>
</div>
<p />
<div className={classes.item}>
  <NavLink to="dialogs" activeClassName={classes.activLinks}>Messages</NavLink>
</div>
<p />
<div className={classes.item}>
  <NavLink to='news' activeClassName={classes.activLinks}>News</NavLink>
</div>
<p />
<div className={classes.item}>
  <NavLink to='music' activeClassName={classes.activLinks}>Music</NavLink>
</div>
<p />
<div className={classes.item}>
  <NavLink to='settings' activeClassName={classes.activLinks}>Settings</NavLink>
</div>
<p />
<div className={classes.item}>
  <NavLink to='users' activeClassName={classes.activLinks}>Users</NavLink>
</div>
<div className={classes.transition}></div>
<div className={classes.friendItem}>
  Friends:
</div>
<p></p>
{friendElement}
</nav>*/