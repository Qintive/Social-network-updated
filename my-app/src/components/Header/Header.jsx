import { AppBar, Container, IconButton, Toolbar, Typography, Button, Box } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1
    },
    menuButton: {
        position: 'relative',
        marginRight: theme.spacing(5)
    },
    title: {
        flexGrow: 1
    },
    navlink: {
        textDecoration: 'none',
        color: 'white'
    },
    main: {
        gridArea: 'h'
    }
   
}))

const Header = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.mian}>
            <AppBar position='fixed'>
                <Container fixed>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                            <MenuIcon />
                        </IconButton>
                        <Typography mr={3} className={classes.title}>
                            Social network
                        </Typography>
                        <Box mr={3} >
                            <div className={classes.header}>
                                {props.isAuth
                                    ? <Button onClick={props.logout} color="inherit" variant="outlined">Logout</Button>
                                    : <Button color='secondary' variant='contained'>
                                        <NavLink to={'/login'} className={classes.navlink}> LOGIN </NavLink>
                                    </Button>
                                }
                            </div>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
export default Header;
